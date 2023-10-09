

const Header = () => {
    return (
        <div>
        <div className="hero min-h-[70vh] bg-" style={{ backgroundImage: 'url("https://i.ibb.co/YbZj7nF/jose-vazquez-UUf5nxh-Eh-As-unsplash.jpg")', backgroundSize: "cover" }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Discover Your Path to Wellness</h1>
                        <p className="mb-5">Explore a world of holistic health, mindfulness, fitness, and self-care. Join us in nurturing your mind, body, and soul at our wellness events and retreats. Embrace a journey towards balance, vitality, and inner peace.</p>
                        <button className="btn btn-primary">Get Register</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;