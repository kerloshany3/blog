'use client';
import React, { useState } from 'react';
import request, { gql } from 'graphql-request';

const Page = () => {
    const MASTER_URL =
        'https://ap-south-1.cdn.hygraph.com/content/cm482x6a502j207w6ujty7gg4/master';

    const [title, setTitle] = useState('');
    const [titleofdata, setTitleOfData] = useState('');
    const [loading, setLoading] = useState(false);
    const [publishLoading, setPublishLoading] = useState(false);
    const [error, setError] = useState('');
    const [publishMessage, setPublishMessage] = useState('');
    const [slug, setSlug] = useState('');

    // Function to update the article
    const handleButtonSubmit = async (e) => {
        e.preventDefault();

        if (!title) {
            alert('Please enter a title.');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const query = gql`
        mutation UpdateArticle {
          updateArticle(data: { title: "${title}" }, where: { slugofart: "${slug}" }) {
            id
            title
          }
        }
      `;

            const dataofarticle = await request(MASTER_URL, query);
            console.log('Mutation Result:', dataofarticle);

            setTitleOfData(dataofarticle.updateArticle.title);
            setLoading(false);
        } catch (err) {
            console.error('Error updating article:', err);
            setError('Failed to update the article. Please try again.');
            setLoading(false);
        }
    };

    // Function to publish the article
    const handlePublish = async () => {
        setPublishLoading(true);
        setPublishMessage('');
        setError('');

        try {
            const query = gql`
        mutation PublishArticle {
          publishArticle(where: { slugofart: "${slug}" }) {
            id
            title
            stage
          }
        }
      `;

            const response = await request(MASTER_URL, query);
            console.log('Publish Response:', response);

            setPublishMessage(`Article "${response.publishArticle.title}" has been published successfully!`);
            setPublishLoading(false);
        } catch (err) {
            console.error('Error publishing article:', err);
            setError('Failed to publish the article. Please try again.');
            setPublishLoading(false);
        }
    };

    return (
        <div className="p-5">
            <form className="" onSubmit={handleButtonSubmit}>
                <input
                    className="text-5xl p-1 text-primary5 font-Abrial w-1/3 rounded-xl"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter new title"
                />
                <button
                    className="bg-white text-5xl p-2 font-extrabold rounded-xl m-3 shadow-white/40 hover:bg-blue-500 duration-500 hover:text-white hover:shadow-blue-500/40 shadow-xl"
                    type="submit"
                    disabled={loading}
                >
                    {loading ? 'Updating...' : 'Submit'}
                </button>
            </form>

            {error && <p style={{ color: 'red' }}>{error}</p>}
            {titleofdata && (
                <p className="font-light text-4xl">
                    Article title updated to: <strong className="font-Abrial">{titleofdata}</strong>
                </p>
            )}

            <input
                className="text-5xl p-1 text-primary5 font-Abrial w-1/3 rounded-xl"
                type="text"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="Enter the slug"
            />

            <button
                className="bg-green-500 text-white text-4xl p-3 font-bold rounded-xl m-3 hover:bg-green-700 duration-500"
                onClick={handlePublish}
                disabled={publishLoading}
            >
                {publishLoading ? 'Publishing...' : 'Publish Article'}
            </button>

            {publishMessage && (
                <p className="font-light text-3xl text-white font-Abrial  mt-3">{publishMessage}</p>
            )}


        </div>
    );
};

export default Page;
