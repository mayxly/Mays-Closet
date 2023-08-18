import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { API, graphqlOperation, Storage } from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { createClothingItem } from '../api/mutations'
import config from '../aws-exports'

const {
    aws_user_files_s3_bucket_region: region,
    aws_user_files_s3_bucket: bucket
} = config


const Admin = () => {
    const [image, setImage] = useState(null);
    const [listingPosted, setListingPosted] = useState(false)
    const [clothingItemDetails, setclothingItemDetails] = useState({ title: "", description: "", image: "", type: "", price: "", condition: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Pressed Submit")
        try {
            if (!clothingItemDetails.title || !clothingItemDetails.price) return
            await API.graphql(graphqlOperation(createClothingItem, { input: clothingItemDetails }))
            setclothingItemDetails({ title: "", description: "", image: "", type: "", price: "", condition: "" })
            setListingPosted(true)
        } catch (err) {
            console.log('error creating todo:', err)
        }
    }

    const handleImageUpload = async (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        const extension = file.name.split(".")[1];
        const name = file.name.split(".")[0];
        const key = `images/${uuidv4()}${name}.${extension}`;
        const url = `https://${bucket}.s3.${region}.amazonaws.com/public/${key}`
        try {
            // Upload the file to s3 with public access level. 
            await Storage.put(key, file, {
                level: 'public',
                contentType: file.type
            });
            // Retrieve the uploaded file to display
            const image = await Storage.get(key, { level: 'public' })
            setImage(image);
            setclothingItemDetails({ ...clothingItemDetails, image: url });
        } catch (err) {
            console.log(err);
        }
    }

    return ( listingPosted ?
        <div className='listing-posted-div'>
            <h1>Listing Posted!</h1>
            <button className="btn mt-5" onClick={() => setListingPosted(false)}>Post Another Item</button>
        </div> :
        <section className="admin-wrapper">
            <AmplifyAuthenticator>
                <section>
                    <header className="form-header">
                        <h3>Add New Item</h3>
                        <AmplifySignOut></AmplifySignOut>
                    </header>
                    <form className="form-wrapper" onSubmit={handleSubmit}>
                        <div className="form-image">
                            {image ? <img className="image-preview" src={image} alt="" /> : <input
                                type="file"
                                accept="image/jpg"
                                onChange={(e) => handleImageUpload(e)} />}

                        </div>
                        <div className="form-fields">
                            <div className="title-form">
                                <p><label htmlFor="title">Title</label></p>
                                <p><input
                                    name="email"
                                    type="title"
                                    placeholder="Type the title"
                                    onChange={(e) => setclothingItemDetails({ ...clothingItemDetails, title: e.target.value })}
                                    required
                                /></p>
                            </div>
                            <div className="description-form">
                                <p><label htmlFor="description">Description</label></p>
                                <p><textarea
                                    name="description"
                                    type="text"
                                    rows="8"
                                    placeholder="Type the description of the clothing item"
                                    onChange={(e) => setclothingItemDetails({ ...clothingItemDetails, description: e.target.value })}
                                    required
                                /></p>
                            </div>
                            <div className="author-form">
                                <p><label htmlFor="author">Type</label></p>
                                <p><input
                                    name="type"
                                    type="text"
                                    placeholder="Type the type of clothing item"
                                    onChange={(e) => setclothingItemDetails({ ...clothingItemDetails, type: e.target.value })}
                                    required
                                /></p>
                            </div>
                            <div className="title-form">
                                <p><label htmlFor="title">Condition</label></p>
                                <p><input
                                    name="type"
                                    type="text"
                                    placeholder="Type the condition"
                                    onChange={(e) => setclothingItemDetails({ ...clothingItemDetails, condition: e.target.value })}
                                    required
                                /></p>
                            </div>
                            <div className="price-form">
                                <p><label htmlFor="price">Price ($)</label>
                                    <input
                                        name="price"
                                        type="text"
                                        placeholder="What is the Price of the clothing item (USD)"
                                        onChange={(e) => setclothingItemDetails({ ...clothingItemDetails, price: e.target.value })}
                                        required
                                    /></p>
                            </div>
                            <div className="featured-form">
                                <p><label>Featured?</label>
                                    <input type="checkbox"
                                        className="featured-checkbox"
                                        checked={clothingItemDetails.featured}
                                        onChange={() => setclothingItemDetails({ ...clothingItemDetails, featured: !clothingItemDetails.featured })}
                                    />
                                </p>
                            </div>
                            <div className="submit-form">
                                <button className="btn" type="submit">Submit</button>
                            </div>
                        </div>
                    </form>
                </section>
            </AmplifyAuthenticator>
        </section>
    )
}

export default Admin
