$(document).ready(function(){


   $.ajax({
       type: 'GET',
       url: 'http://www.redbullshopus.com/products.json',
       data: {
           products: {}
           },
          dataType: 'json',
           success: function(response) {
           "<div id='flex-container'>"
           for (var i = 0; i < response.products.length; i++) {
               
            $('#column')
               
               .append("<div class='images'>" +
               "<img src=" 
               + 
               response.products[i].images[0].src +
               "</div>" 
               //This will pull the products image off of Redbull's
               //website LIVE in real time */
               + 
               "<div class='product'>" +
               response.products[i].title +
               "</div>" 
               //This code will pull the title of the product off
               //of Redbull's website LIVE in real time*/
               + 
               "<div class='description'>" +
               response.products[i].body_html + "</div>");
               //This code will pull the description of the product
               //off of Redbull's website in LIVE real time 
           }
           "</div>"
           }

       });



   });