import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

// API FRA RAPIDAPI
  
// Hent data om placeringer
export const getPlaceData = async (sw, ne) => {

    // Forsøg at:
    try {
        const {data: {data}} = await axios.get(URL, {
          params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng, 
          tr_longitude: ne.lng,
        },
        headers: {
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
          'x-rapidapi-key': '4fa7fecbf7msh18d7a3f85c50bd9p1b2d0ajsnb68ca19d79a6'
        }
      });
        
        return data;
    }

    // Catch error
    catch (error) {
        console.log(error);
    } // 53:47
    // 53:47
    // 53:47
    // 53:47
    // 53:47
    // 53:47
    // 53:47
    // 53:47
    // 53:47
    // 1.26.45
    
}