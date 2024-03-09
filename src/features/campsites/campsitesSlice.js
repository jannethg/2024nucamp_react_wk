import {CAMPSITES} from '../../app/shared/CAMPSITES';

// export a couple of selector functions that we can use to get a specific pieces of data.

//this access the campsites array
export const selectAllCampsites = () => {
    return CAMPSITES;
}; 


// //this access the Random campsite from the array. 
// export const selectRandomCampsite = () => {
//     return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())]
// }

export const selectCampsitebyId = (id) => {
    return CAMPSITES.find((campsite) => campsite.id === id);
};

