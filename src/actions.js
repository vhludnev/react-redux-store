export const inc = () => ({ type: 'INC' });    // the same as: const inc = () => { return { type: 'INC' }; }

export const dec = () => ({ type: 'DEC' });

export const rnd = () => {
    return { 
        type: 'RND', 
        value: Math.floor(Math.random()*10) 
    };
};