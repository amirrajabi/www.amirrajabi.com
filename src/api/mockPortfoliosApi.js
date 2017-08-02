import delay from './delay';

const portfolios = [
    {
        id: 'flee-bee',
        name: 'Flee Bee',
        type: 'Game',
        url: 'not active',
        images: [
            'image1.jpg',
            'image2.jpg',
            'image3.jpg'
        ]
    },
    {
        id: 'marhaba',
        name: 'Marhaba',
        type: 'Website',
        url: 'http://www.marhaba.com',
        images: [
            'image1.jpg',
            'image2.jpg',
            'image3.jpg'
        ]
    }
];

class PortfoliosApi {
    static getAllPortfolio() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], portfolios));
            }, delay);
        });
    }
}

export default PortfoliosApi;
