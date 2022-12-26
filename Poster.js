AFRAME.registerComponent("comic", {
    init: function () {
      this.comicContainer = this.el;
      this.createCards()
    },
  
    createCards: function () {
      const comicsRef = [
        {
          id: "kanto",
          title: "Kanto Region",
          url: "./kanto.jpg",
        },
        {
          id: "jhoto",
          title: "Jhoto Region",
          url: "./jhoto.jpg",
        },
  
        {
          id: "hoenn",
          title: "Hoenn Region",
          url: "./hoenn.jpg",
        },
        {
          id: "sinoh",
          title: "Sinoh Region",
          url: "./sinoh.jpg",
        },
      ];
      let prevoiusXPosition = -60;
  
      for (var item of comicsRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
        const borderEl = this.createBorder(position,item.id)
        const comic = this.Comic(item)
        borderEl.appendChild(comic)
        const titleEl = this.createTitle(position,item)
        borderEl.appendChild(titleEl)
        this.comicContainer.appendChild(borderEl);
      }
    },
  
        // Border Element
        createBorder: function(position,id){
          const entityEl = document.createElement("a-entity")
          entityEl.setAttribute("id",id)
          entityEl.setAttribute("position",position)
          entityEl.setAttribute("visible",true)
          entityEl.setAttribute("geometry",{primitive:"ring",radiusInner:9,radiusOuter:10})
          entityEl.setAttribute("material",{color:"black",opacity:0.4})
          return entityEl
        },
        // Thumbnail Element
        Comic: function(item){
          const entityEl = document.createElement("a-entity")
          entityEl.setAttribute("visible",true)
          entityEl.setAttribute("geometry",{primitive:"circle",radius:9})
          entityEl.setAttribute("material",{src:item.url})
          return entityEl
        },
        // Title Text Element
        createTitle : function(position,item){
          const entityEl = document.createElement("a-entity")
          entityEl.setAttribute("text",{font:"exo2bold",align:"center",width:80,color:"brown",value:item.title})
          const elPosition = position
          elPosition.y=-20
          entityEl.setAttribute("position",elPosition)
          entityEl.setAttribute("visible",true)
          return entityEl
        }
        
    
    
  });
  