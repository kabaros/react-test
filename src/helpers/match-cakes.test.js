import matchCakes from './match-cakes';

describe('matching cakes', () => {
    let cakes;
    beforeEach(() => {
         cakes = [{
            title: 'awesome-cake'
        }, {
            title: 'not-great-cake'
        }];
        
    });

    it('matches cakes starting with a string', () => {
        const result = matchCakes(cakes, 'awe');

        expect(result.length).toEqual(1);
        expect(result[0].title).toEqual('awesome-cake');
    });
    it('matches cakes if the string appears anywhere', () => {
        const result = matchCakes(cakes, 'some');
        expect(result.length).toEqual(1);
        expect(result[0].title).toEqual('awesome-cake');
    });
    it('matches cakes if the string is a different case', () => {
        const result = matchCakes(cakes, 'AWE');
        expect(result.length).toEqual(1);
        expect(result[0].title).toEqual('awesome-cake');
    });
    it('returns nothing if no match', () => {
        const cakes = [{
            title: 'awesome-cake'
        }, {
            title: 'not-great-cake'
        }];
        const result = matchCakes(cakes, 'zzz');
        expect(result.length).toEqual(0);
    });
});