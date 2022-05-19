const qs = require('qs');
const query = qs.stringify( async, {
  populate: {
    graduated_number: {
      populate: '*',
      //populate: ['IS'],
    },
    
  } 
}, {
  encodeValuesOnly: true,
});

await request(`/api/academic-years?${query}`);
// GET /api/academic-years?populate[graduated_number][populate][0]=CS
