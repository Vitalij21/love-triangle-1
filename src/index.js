/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var a, b, c, d;
  var m=0;
  //b=preferences[a];
  //c=preferences[b];
  for (var i=0; i<preferences.length; i++) {

    if (preferences [i]!=0){
    var f = preferences[i];
    //var p = preferences[i-1];
    var p = preferences[f-1];
      
    if (f != p) {

      if (i==preferences[p-1]-1) {

        preferences[i]=0;
        preferences[f-1]=0;
        preferences[p-1]=0;

        m++;
      }
    }

    }
  //a=i;
  //b=preferences[a];
  //c=preferences[b];
  //if(i==preferences[preferences[preferences[i]]]) {
  //d++;
  //};
  };
  return m;
  };
