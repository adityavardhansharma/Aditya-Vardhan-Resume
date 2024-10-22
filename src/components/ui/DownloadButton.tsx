'use client';

const DownloadButton = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/Resume.pdf';  // Replace with actual resume path
        link.download = 'Aditya Resume.pdf';       // Replace with desired filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <button
            onClick={handleDownload}
            className="flex text-green-500 justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
        >
            Download Resume
            <svg
                className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2"
                viewBox="0 0 16 19"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M8 1C8 0.447715 8.44772 0 9 0C9.55228 0 10 0.447715 10 1L8 1ZM9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071L1.92893 12.3431C1.53841 11.9526 1.53841 11.3195 1.92893 10.9289C2.31946 10.5384 2.95262 10.5384 3.34315 10.9289L9 16.5858L14.6569 10.9289C15.0474 10.5384 15.6805 10.5384 16.0711 10.9289C16.4616 11.3195 16.4616 11.9526 16.0711 12.3431L9.70711 18.7071ZM10 1L10 18H8L8 1L10 1Z"
                    className="fill-gray-800 group-hover:fill-gray-800"
                />
            </svg>
        </button>
    );
};

export default DownloadButton;