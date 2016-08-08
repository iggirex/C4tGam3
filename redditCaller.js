

// $("#sumbit").click(function(e){


    $.getJSON("http://www.reddit.com/r/catpics/.json?jsonp=?", function(data) {
        // $.each(data.data.children, function(i,item){
        //   // $("<img/>").attr("src", item.data.url).appendTo("#images");
        //     console.log(data)
        // });
        for(var i = 0; i<data.data.children[i].data.url.length; i++) {
            var catPic = data.data.children[i].data.url
            console.log(catPic)

            var rando = Math.floor(Math.random()*20)

            // console.log(slice)
            console.log(catPic.charAt(catPic.length -1))

             if((catPic.charAt(data.data.children[rando].data.url.length - 1) === "g")) {
                    //  $("<img/>").attr("src", data.data.children[i].data.url).appendTo("#images")
                    //  console.log("THIS ONE IS working")
                    $("body").css("background-image", "url(" + data.data.children[i].data.url) + ")"
                     break
             }

            // console.log(slice)
            // $("#allPics").append("<img src='data.data.children[i]'/>")
            // if(slice === "http://imgur" || "http://i.img"){
            //   $("body").append('<img src=data.data.children[i].data.url/>')
            //   console.log("tru tru yo")
            // }

          }

          // $.each(data.data.children, function(i,item){
          //   $("<img/ width='300' height='300'>").attr("src", item.data.url).appendTo("#images");
          //   });

    });

  // })
