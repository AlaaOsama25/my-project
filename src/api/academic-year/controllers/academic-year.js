const qs = require('qs');
const query = qs.stringify({
  populate: {
    graduated_number: {
      populate: '*',
      //populate: ['IS'],
    },
    research: {
      populate: '*',
    }
  } 
}, {
  encodeValuesOnly: true,
});

await request(`/api/academic-years?${query}`);
// GET /api/academic-years?populate[graduated_number][populate][0]=CS
