import React, { useState } from "react";
import "./SearchResult.css";
import { FaCopy } from "react-icons/fa";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

export const SearchResult = ({ result, inputLetter }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedFormat, setSelectedFormat] = useState("APA");
    const [isCopied, setIsCopied] = useState(false);

    // Function to make matching letter bold
    const boldMatchingLetter = (text, letter) => {
        if (!letter) return text; // If no letter inputted, return original text
        const regex = new RegExp(`(${letter})`, "gi");
        return text.replace(regex, "<span style='font-weight: bold'>$1</span>");
    };

    // Citation generators
    const citationFormats = {
        APA: `${result.author}. (${new Date().getFullYear()}). ${result.title}.`,
        MLA: `${result.author}. "${result.title}." ${result.title}, ${new Date().getFullYear()}.`
    };

    const handleFormatChange = (e) => {
        setSelectedFormat(e.target.value);
    };

    const handleCopyCitation = () => {
        navigator.clipboard.writeText(citationFormats[selectedFormat]);
        setIsCopied(true);
        NotificationManager.success('Copied!', '', 3000);
        setTimeout(() => {
            setIsCopied(false);
        }, 3000);
    };

    const handleResultClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = (e) => {
        e.stopPropagation(); // Prevent event propagation to the parent div
        setShowModal(false);
    };

    return (
        <div className="search-result1" onClick={handleResultClick}>
            <div className="title" dangerouslySetInnerHTML={{ __html: boldMatchingLetter(result.title, inputLetter) }}></div>
            <div className="authors" dangerouslySetInnerHTML={{ __html: boldMatchingLetter(result.author, inputLetter) }}></div>
            {showModal && (
                <div className="modal1" onClick={handleCloseModal}>
                    <div className="modal-content1" onClick={(e) => e.stopPropagation()}>
                        <span className="close1" onClick={handleCloseModal}>&times;</span>
                        <h2>Title:</h2>
                        <p>{result.title}</p>
                        <h2>Author:</h2>
                        <p>{result.author}</p>
                        <h2>Abstract:</h2>
                        <p>{result.abstract}</p> {/* Display abstract */}
                        <div className="citation-container">
                            <label className="block mb-2">Select Citation Format:</label>
                            <select value={selectedFormat} onChange={handleFormatChange} className="w-48 mb-4">
                                <option value="APA">APA</option>
                                <option value="MLA">MLA</option>
                            </select>
                            <div className="flex items-center">
                                <p className="mr-4">{citationFormats[selectedFormat]}</p>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleCopyCitation}>
                                    <FaCopy />
                                </button>
                                {isCopied && <span className="ml-4 text-green-500">Copied!</span>}
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <NotificationContainer />
        </div>
    );
};
