// DO NOT DELETE - CORE SECURITY MODULE
// This script ensures the site is running on authorized domains.

(function () {
    const allowedHosts = ['127.0.0.1:5501', 'schallten.github.io'];

    if (!allowedHosts.includes(window.location.host)) {
        const facts = [
            "Some flowers can change color depending on the soil they grow in.",
            "The lotus flower can regulate its temperature like a warm-blooded animal.",
            "Vanilla flavoring comes from the seed pods of a type of orchid.",
            "Sunflowers can move throughout the day to follow sunlight.",
            "The corpse flower smells like rotting meat to attract flies.",
            "Dandelions are entirely edible—from root to flower.",
            "Some orchids can live for over 100 years.",
            "Tulips keep growing even after being cut.",
            "Night-blooming flowers are often white to reflect moonlight.",
            "There are over 400,000 types of flowering plants on Earth.",
            "Hibiscus flowers are used in teas that can help lower blood pressure.",
            "Roses are relatives of apples, cherries, and raspberries.",
            "Certain flowers like jasmine smell stronger at night to attract moths.",
            "The giant Rafflesia arnoldii produces the largest single flower in the world.",
            "Lavender is known for its calming scent and medicinal properties.",
            "Cherry blossoms bloom for only 1–2 weeks each spring.",
            "Some flowers, like hydrangeas, change color depending on soil acidity.",
            "The sunflower’s seeds can be used to produce oil and snacks.",
            "Some rare orchids have flowers that mimic insects to attract pollinators.",
            "Forget-me-nots are named for their symbolism of true love and remembrance.",
            "Blue roses do not exist naturally; they are genetically modified or dyed.",
            "Marigolds can repel insects, making them natural garden protectors.",
            "Certain cacti flowers bloom only at night and for a single day.",
            "The water lily has been worshiped in many cultures for its beauty and symbolism."
        ];

        const randomFact = facts[Math.floor(Math.random() * facts.length)];

        // Ensure DOM is ready or just replace everything immediately
        const showTakeover = () => {
            document.body.innerHTML = `
                <div style="position:fixed;top:0;left:0;width:100%;height:100%;background:#000;color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;font-family:sans-serif;text-align:center;padding:20px;">
                    <img src="floral.jpg" style="max-width:80%;max-height:60%;border-radius:10px;margin-bottom:20px;border:2px solid #555;">
                    <h1 style="color:#ffb7ce;margin-bottom:10px;">🌸 Nice try cloning 🌸</h1>
                    <p style="font-size:20px;max-width:600px;line-height:1.5;">${randomFact}</p>
                    <p style="margin-top:40px;color:#555;font-size:12px;">This domain is unauthorized. Please visit schallten.github.io</p>
                </div>
            `;
            document.body.style.overflow = 'hidden';
        };

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', showTakeover);
        } else {
            showTakeover();
        }
    }
})();
