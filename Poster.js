AFRAME.registerComponent("comic-container",{
    init:function(){

    },

    createComics:function(){
        const comics=[
            {
                id:"comic-1",
                title:"Super Hero - Mad Libs",
                url:"./assets/comic-1.png"
            },
            {
                id:"comic-2",
                title:"SpiderMan",
                url:"./assets/comic-2.webp"
            },
            {
                id:"comic-3",
                title:"The Avengers - War Across Time",
                url:"./assets/comic-3.jpg"
            },
            {
                id:"comic-4",
                title:"Avengers - Judgement Day",
                url:"./assets/comic-4.jpg"
            }
        ]
        let previousXPosition = -60
        for(var comic in comics){
            const posX = previousXPosition+25
            const posY = 7
            const posZ = 10
            const position = {x:posX,y:posY,z:posZ}
            previousXPosition = posX

            //border
            var borderEl = this.createBorder(previousXPosition,comic.id)
            //thumbnail
            var thumbnailEl = this.createThumbnail(comic)
            borderEl.appendChild(thumbnailEl)
            //title
            var titleEl = this.createTitle(previousXPosition,comic)
            borderEl.appendChild(titleEl)
        }
    },

    createBorder:function(position,id){
      const entityEl = document.createElement("a-entity")
      entityEl.setAttribute("id",id)
      entityEl.setAttribute("visible",true)
      entityEl.setAttribute("geometry",{
        primitive:"ring",
        radiusInner:9,
        radiusOuter:10
      })
      entityEl.setAttribute("position",position)
      entityEl.setAttribute("material",{
        color:"red",
        opacity:1
      })
  
      return entityEl
    },
  
    createThumbnail:function(item){
      const entityEl = document.createElement("a-entity")
      entityEl.setAttribute("visible",true)
      entityEl.setAttribute("geometry",{
        primitive:"circle",
        radius:9
      })
      entityEl.setAttribute("material",{
        src:item.url
      })
  
      return entityEl
    },
  
    createTitle:function(position,item){
      const entityEl = document.createElement("a-entity")
      entityEl.setAttribute("visible",true)
      entityEl.setAttribute("text",{
        font:"exo2bold",
        align:"center",
        width:70,
        color:"#e65100",
        value:item.title
      })
      var pos = position
      pos.y = -20
      entityEl.setAttribute("position",pos)
  
      return entityEl
    }
}) 