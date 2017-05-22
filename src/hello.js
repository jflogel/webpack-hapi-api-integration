import $ from 'jquery';

export default function component () {
   return $.ajax('api/hello').done((data) => {
     return data;
   });
}