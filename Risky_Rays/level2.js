const canvas =  document.querySelector('canvas')
const scoreEl =  document.querySelector('#scoreEl')
var game1 =  document.getElementById("body");
var start =  document.getElementById("ba");


var fair_sound =  new Audio("audio/shoot.wav");
fair_sound.volume = 0.2;

var fair_enmy =  new Audio("audio/enemyShoot.wav");
fair_enmy.volume = 0.3;

var me_distrov =  new Audio("audio/bomb.mp3");
me_distrov.volume = 0.3;

var game_over =  new Audio("audio/gameOver.mp3");
game_over.volume = 0.3;

var start =  new Audio("audio/start.mp3");
start.volume = 0.3;

var enmy_distroy =  new Audio("audio/explode.wav");
enmy_distroy.volume = 0.3;

var won1 =  new Audio("audio/won1.wav");
won1.volume = 0.5;

var background =  new Audio("audio/backgroundMusic.wav");
background.volume = 0.5;

background.play();
function main(){
    var select =  new Audio("audio/select.mp3");
    select.volume = 0.5;
    
        
        select.play();
    setTimeout(() =>{
                                           
        window.location = "index.html";
       
       
       
    }, 900)  
  
   
}

 

function play() {
    var start =  new Audio("audio/start.mp3");
    start.volume = 0.3
     
    start.play();
    background.play();

    var game1 =  document.getElementById("body");
var start =  document.getElementById("ba");
    game1.classList.toggle("d-none");
    start.classList.toggle("d-none")


    if (game1.className =="d-none" ) {
        alert("ok");
        const c = canvas.getContext('2d') 
    
        console.log(scoreEl)
        
        canvas.width = 1024
        canvas.height = 600
        
        class Player {
            constructor(){
                
                this.velocity = {
                    x: 0,
                    y: 0
                }
                this.rotation = 0
                this.opacity = 1
                const image = new Image()
                image.src = './img/spaceship.png'
                image.onload = () => {
                     const scale = 0.15
        
                    this.image = image
                    this.width = image.width * scale
                    this.height = image.height * scale
                    this.position = {
                        x: canvas.width / 2 - this.width / 2,
                        y: canvas.height  - this.height-20
                    }
                }
        
               
            }
            draw(){
                // c.fillStyle = 'red'
                // c.fillRect(this.position.x, this.position.y, this.width,
                //     this.height)
                c.save()
                c.globalAlpha = this.opacity
                 c.translate(player.position.x + player.width / 2, player.
                 position.y + player.height /2) 
        
                 c.rotate(this.rotation)
        
                 c.translate(-player.position.x - player.width / 2, -player.
                 position.y - player.height /2) 
                  c.drawImage(this.image,
                    this.position.x,
                    this.position.y,
                    this.width,
                    this.height)
                    
                c.restore()
                
            }
        
        
            update(){
                if(this.image){
                this.draw()
                this.position.x += this.velocity.x
            }
        }
        
            
        }
        class projectile {
            constructor({position, velocity}){
               this.position = position 
               this.velocity = velocity
        
               this.radius = 4
            }
            draw(){
                c.beginPath()
                c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2)
                c.fillStyle = 'red'
                c.fill()
                c.closePath()
            }
            update(){
                this.draw()
                this.position.x += this.velocity.x
                this.position.y += this.velocity.y
            }
        }
        class InvaderProjectile {
            constructor({position, velocity}){
               this.position = position 
               this.velocity = velocity
            // enmy shoot size
              this.width = 3
              this.height =10
              // enmy shoot size
        
            }
            draw(){
                // enmy shoot colour
                c.fillStyle = 'yellow'
                // enmy shoot colour
                c.fillRect(this.position.x, this.position.y, this.width,
                    this.height)
            }
            update(){
                this.draw()
                this.position.x += this.velocity.x
                this.position.y += this.velocity.y
            }
        }
        class Particle {
            constructor({position, velocity, radius, color, fades }){
               this.position = position 
               this.velocity = velocity
        
               this.radius = radius
               this.color = color
               this.opacity = 1
               this.fades = fades
            }
            draw(){
                c.save()
                c.globalAlpha = this.opacity
                c.beginPath()
                c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2)
                c.fillStyle = this.color
                c.fill()
                c.closePath()
                c.restore()
            }
            update(){
                this.draw()
                this.position.x += this.velocity.x
                this.position.y += this.velocity.y
                if(this.fades) this.opacity -= 0.01
            }
        }
        class Invader {
            constructor({position}){
                
                this.velocity = {
                    x: 0,
                    y: 0
                }
                
                const image = new Image()
                image.src = './img/invader.png'
                image.onload = () => {
                     const scale = 1
        
                    this.image = image
                    this.width = image.width * scale
                    this.height = image.height * scale
                    this.position = {
                        x: position.x,
                        y: position.y
                    }
                }
        
               
            }
            draw(){
                // c.fillStyle = 'red'
                // c.fillRect(this.position.x, this.position.y, this.width,
                //     this.height)
               
                   c.drawImage(this.image,
                    this.position.x,
                    this.position.y,
                    this.width,
                    this.height)
                    
               
                
            }
        
        
            update({velocity}){
                if(this.image){
                this.draw()
                this.position.x += velocity.x
                this.position.y += velocity.y
            }
        }
        shoot(invaderProjectiles){
            invaderProjectiles.push(new InvaderProjectile({
                position:{
                    x: this.position.x + this.width / 2,
                    y: this.position.y + this.height
                },
                velocity:{
                     // enmy shot angel
                    x: 0,
                     // enmy shot angel
                    // enmy shot speed
                    y: 5
                    // enmy shot speed
                }
            }))
        }
        
            
        }
        
        class Grid {
            constructor(){
                this.position = {
                    x: 0,
                    y: 0
                }
                this.velocity = {
                    // speed
                    x: 3,
                    //speed
                    y:0
                }
        
                this.invaders = []
        //picture  
        const rows =Math.floor( Math.random() * 5 + 2)
        const columns =Math.floor( Math.random() * 10 + 5)
        
        this.width = columns * 30
              for (let x = 0; x <columns; x++){
                for (let y = 0; y <rows; y++){ 
                    // picture
                this.invaders.push(new Invader({position:{
                x: x * 30,
                y: y * 30
                }
                }))
              }
            }
              console.log(this.invaders)
            }
            update(){
                this.position.x += this.velocity.x
                this.position.y += this.velocity.y
                this.velocity.y = 0
        
                if(this.position.x +this.width >= canvas.width || this.
                    position.x <= 0){
                    this.velocity.x = -this.velocity.x
                    // picture dowan
                    this.velocity.y = 30
                    // picture dowan
                }
            }
        }
        const player = new Player()
        const projectiles = []
        const grids = []
        const invaderProjectiles = []
        const particles = []
        
        const keys =  {
            a:{
            pressed: false
            },
            d:{
                pressed:false
            },
            space:{
                pressed:false
            }
        
        
        }
        
        
        let frames = 0
            // aluth enimi bihiwimee speed
        
        let randomInterval =Math.floor(Math.random() * 500) + 500
         // aluth enimi bihiwimee speed
         let game = {
            over: false,
            active: true
         }
         let score = 0
         for(let i = 0; i< 100; i++){
            particles.push(new Particle({
             position: {
                 x:Math.random() * canvas.width,
                 y:Math.random() * canvas.height
             },
             velocity: {
                 //star  size       
                 x: 0,
                  //star  size  
         //star  speed
                 y: 0.3
                 //star speed
             },
             //star colour and size
             radius: Math.random() * 3,
             color: 'white'
             //star colour and size
            }))
         }
        
         function creatParticles({Object, color, fades}){
            for(let i = 0; i< 15; i++){
                particles.push(new Particle({
                 position: {
                     x:Object.position.x + Object.width / 2,
                     y:Object.position.y + Object.height / 2
                 },
                 velocity: {
                     //distroy enmy speed         
                     x: (Math.random() - 0.5) * 2,
                     y: (Math.random() - 0.5) * 2
                     //distroy enmy speed
                 },
                 //distroy enmy colour and size
                 radius: Math.random() * 3,
                 color: color || '#BAA0DE',
                 //distroy enmy colour and size
                 fades 
                }))
             }
         }
        
        
        function animate(){
            if(!game.active) return
            requestAnimationFrame(animate)
            c.fillStyle = 'black'
            c.fillRect(0, 0, canvas.width, canvas.height)
            
            player.update()
            particles.forEach((particle, i) => {
              
                if(particle.position.y - particle.radius >= canvas.
                    height){
                        particle.position.x = Math.random() * canvas.width
                        particle.position.y = -particle.radius
                    }
        
                if (particle.opacity <= 0) {
                    setTimeout(() =>{
                        particles.splice(i, 1)
                    }, 0)
                  
                }else{
                    particle.update()
                }
                
            })
            console.log(particles)
            invaderProjectiles.forEach((invaderProjectile, index) =>{
                if(invaderProjectile.position.y + invaderProjectile.
                    height >= canvas.height){
                        setTimeout(() =>{
                            invaderProjectiles.splice(index, 1)
                        }, 0)  
                    }else{
                        invaderProjectile.update()
                        if(invaderProjectile.position.y + invaderProjectile.
                            height >= player.position.y &&
                            invaderProjectile.position.x + invaderProjectile.width
                            >=
                            player.position.x &&
                            invaderProjectile.position.x <= player.position.x +
                            player.width){
                                console.log('you lose')
                                
                                setTimeout(() =>{
                                    invaderProjectiles.splice(index, 1)
                                    player.opacity = 0
                                    game.over = true
                                }, 0)  
                                
                                setTimeout(() =>{
                                    // alert("lose");
                                    game.active = false
                                    // game lose
                                    alert("pissa");
                                    // game lose
                                }, 2000)  
                                
                                creatParticles({
                                    Object: player,
                                    // we destroy colour
                                
                                    color: 'white',
                                    // we destroy colour
                                    fades: true
        
                                })
                            }
                    }
                invaderProjectile.update( )
            })
            projectiles.forEach((projectile, index )=>{
                if(projectile.position.y + projectile.radius <= 0){
                    setTimeout(() =>{
                        projectiles.splice(index, 1)
                    }, 0)
                    
                }else{
                    projectile.update()
                }
               
            })
            console.log(invaderProjectiles)
        
        grids.forEach((grid, gridIndex) =>{
            grid.update()
            if(frames % 100 === 0 && grid.invaders.length >0){
                grid.invaders[Math.floor(Math.random() * grid.invaders.
                    length)].shoot(invaderProjectiles)
            }
            grid.invaders.forEach((invader, i) => {
                invader.update({velocity: grid.velocity})
        
                //projecttile hit enmy
                projectiles.forEach((projectile, j) => {
                    if(projectile.position.y -projectile.radius <=
                        invader.position.y + invader.height && 
                        projectile.position.x + projectile.radius >=
                        invader.position.x &&      
                        projectile.position.x -projectile.radius <=
                        invader.position.x + invader.width &&
                        projectile.position.y + projectile.radius >= 
                        invader.position.y){
        
                         
                          
                            setTimeout(() => {
                                const invaderFound = grid.invaders.find(
                                    (invader2) =>invader2 === invader
                                )
                                const projectileFound = projectiles.find(
                                    (projectile2)=> projectile2 === projectile
                                )
                                // remove enmy
                                if(invaderFound && projectileFound){
                                    score +=100
                                    console.log(score)
                                    scoreEl.innerHTML = score
                                    if(score == 1100){
                                       window.location = "level2.html";
                                        setTimeout(() =>{
                                           
                                            game.active = false
                                          
                                           
                                           
                                        }, 2000)  
                                       
                                    }
                                    creatParticles({
                                        Object:invader,
                                        fades : true
                                    })
                                  
                                grid.invaders.splice(i, 1)
                                projectiles.splice(j, 1)
        
                                if(grid.invaders.length > 0){
                                    const firstInvader = grid.invaders[0]
                                    const lastInvader = grid.invaders[grid.
                                    invaders.length - 1]
        
                                    grid.width = lastInvader.position.x -
                                    firstInvader.position.x + lastInvader.width
                                    grid.position.x = firstInvader.position.x
                                    
                                }else{
                                    grids.splice(gridIndex, 1)
                                }
                                }
                            },0 )
                        }
                })
            })
        })
        
        
            if(keys.a.pressed && player.position.x >= 0){
                player.velocity.x = -7
                player.rotation = -0.15
            } else if(keys.d.pressed && player.position.x  +player.width <= canvas.width){
                player.velocity.x = 7
                player.rotation = 0.15
            } 
            else {
                player.velocity.x = 0
                player.rotation = 0
            }
            console.log(frames)
            if(frames % randomInterval === 0){
              
                grids.push(new Grid())
                // aluth enimi bihiwimee speed
                
                randomInterval =Math.floor(Math.random() * 500) + 500
                // aluth enimi bihiwimee speed
                frames = 0
                console.log(randomInterval)
            }
            
            frames++
        }
        animate()
        
        addEventListener('keydown', ({ key }) => {
            if(game.over)return
            
            switch (key){
                case 'a':
                    //  console.log('left')
                    
                     keys.a.pressed = true
                     break
                     case 'd':
                        // console.log('right')
                        keys.d.pressed = true
                        break
                        case ' ':
                            // console.log('space')
                             projectiles.push(
                                new projectile({
                                position: {
                                    x:player.position.x +player.width / 2,
                                    y:player.position.y
                                },
                                velocity: {
                                    x:0,
                                    y: -10
                                }
                             })
                             )
                            //  confirm.log(projectiles)
                            break
            }
        })
        
        addEventListener('keyup', ({ key }) => {
            
            switch (key){
                case 'a':
                    //  console.log('left')
                    
                     keys.a.pressed = false
                     break
                     case 'd':
                        // console.log('right')
                        keys.d.pressed = false
                        break
                        case ' ':
                            // console.log('space')
                            keys.a.pressed = false
                            break
            }
        })
        
        
    }
    
    
    
    
    
    else{
         const c = canvas.getContext('2d') 
    
        console.log(scoreEl)
        
        canvas.width = 1024
        canvas.height = 600
        
        class Player {
            constructor(){
                
                this.velocity = {
                    x: 0,
                    y: 0
                }
                this.rotation = 0
                this.opacity = 1
                const image = new Image()
                image.src = './img/spaceship.png'
                image.onload = () => {
                     const scale = 0.25
        
                    this.image = image
                    this.width = image.width * scale
                    this.height = image.height * scale
                    this.position = {
                        x: canvas.width / 2 - this.width / 2,
                        y: canvas.height  - this.height-20
                    }
                }
        
               
            }
            draw(){
                // c.fillStyle = 'red'
                // c.fillRect(this.position.x, this.position.y, this.width,
                //     this.height)
                c.save()
                c.globalAlpha = this.opacity
                 c.translate(player.position.x + player.width / 2, player.
                 position.y + player.height /2) 
        
                 c.rotate(this.rotation)
        
                 c.translate(-player.position.x - player.width / 2, -player.
                 position.y - player.height /2) 
                  c.drawImage(this.image,
                    this.position.x,
                    this.position.y,
                    this.width,
                    this.height)
                    
                c.restore()
                
            }
        
        
            update(){
                if(this.image){
                this.draw()
                this.position.x += this.velocity.x
            }
        }
        
            
        }
        class projectile {
            constructor({position, velocity}){
               this.position = position 
               this.velocity = velocity
        
               this.radius = 4
            }
            draw(){
                c.beginPath()
                c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2)
                c.fillStyle = 'red'
                fair_sound.play();
                c.fill()
                c.closePath()
            }
            update(){
                this.draw()
                this.position.x += this.velocity.x
                this.position.y += this.velocity.y
            }
        }
        class InvaderProjectile {
            constructor({position, velocity}){
               this.position = position 
               this.velocity = velocity
            // enmy shoot size
              this.width = 6
              this.height =15
              // enmy shoot size
        
            }
            draw(){
                // enmy shoot colour
                c.fillStyle = 'yellow'
                // enmy shoot colour
                c.fillRect(this.position.x, this.position.y, this.width,
                    this.height)
            }
            update(){
                this.draw()
                this.position.x += this.velocity.x
                this.position.y += this.velocity.y
            }
        }
        class Particle {
            constructor({position, velocity, radius, color, fades }){
               this.position = position 
               this.velocity = velocity
        
               this.radius = radius
               this.color = color
               this.opacity = 1
               this.fades = fades
            }
            draw(){
                c.save()
                c.globalAlpha = this.opacity
                c.beginPath()
                c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2)
                c.fillStyle = this.color
                c.fill()
                c.closePath()
                c.restore()
            }
            update(){
                this.draw()
                this.position.x += this.velocity.x
                this.position.y += this.velocity.y
                if(this.fades) this.opacity -= 0.01
            }
        }
        class Invader {
            constructor({position}){
                
                this.velocity = {
                    x: 0,
                    y: 0
                }
                
                const image = new Image()
                image.src = './img/invader.png'
                image.onload = () => {
                     const scale = 1.5
        
                    this.image = image
                    this.width = image.width * scale
                    this.height = image.height * scale
                    this.position = {
                        x: position.x,
                        y: position.y
                    }
                }
        
               
            }
            draw(){
                // c.fillStyle = 'red'
                // c.fillRect(this.position.x, this.position.y, this.width,
                //     this.height)
               
                   c.drawImage(this.image,
                    this.position.x,
                    this.position.y,
                    this.width,
                    this.height)
                    
               
                
            }
        
        
            update({velocity}){
                if(this.image){
                this.draw()
                this.position.x += velocity.x
                this.position.y += velocity.y
            }
        }
        shoot(invaderProjectiles){
            fair_enmy.play();
            invaderProjectiles.push(new InvaderProjectile({
                position:{
                    x: this.position.x + this.width / 2,
                    y: this.position.y + this.height
                },
                velocity:{
                     // enmy shot angel
                    x: 0,
                     // enmy shot angel
                    // enmy shot speed
                    y: 2.5
                    // enmy shot speed
                }
            }))
        }
        
            
        }
        
        class Grid {
            constructor(){
                this.position = {
                    x: 0,
                    y: 0
                }
                this.velocity = {
                    // speed
                    x: 2.5,
                    //speed
                    y:0
                }
        
                this.invaders = []
        //picture  
        const rows =Math.floor( Math.random() * 3 + 1)
        const columns =Math.floor( Math.random() * 7 + 5)
        
        this.width = columns * 45
              for (let x = 0; x <columns; x++){
                for (let y = 0; y <rows; y++){ 
                    // picture
                this.invaders.push(new Invader({position:{
                x: x * 45,
                y: y * 45
                }
                }))
              }
            }
              console.log(this.invaders)
            }
            update(){
                this.position.x += this.velocity.x
                this.position.y += this.velocity.y
                this.velocity.y = 0
        
                if(this.position.x +this.width >= canvas.width || this.
                    position.x <= 0){
                    this.velocity.x = -this.velocity.x
                    // picture dowan
                    this.velocity.y = 10
                    // picture dowan
                }
            }
        }
        const player = new Player()
        const projectiles = []
        const grids = []
        const invaderProjectiles = []
        const particles = []
        
        const keys =  {
            a:{
            pressed: false
            },
            d:{
                pressed:false
            },
            space:{
                pressed:false
            }
        
        
        }
        
        
        let frames = 0
            // aluth enimi bihiwimee speed
        
        let randomInterval =Math.floor(Math.random() * 500) + 250
         // aluth enimi bihiwimee speed
         let game = {
            over: false,
            active: true
         }
         let score = 0
         for(let i = 0; i< 100; i++){
            particles.push(new Particle({
             position: {
                 x:Math.random() * canvas.width,
                 y:Math.random() * canvas.height
             },
             velocity: {
                 //star  size       
                 x: 0,
                  //star  size  
         //star  speed
                 y: 0.3
                 //star speed
             },
             //star colour and size
             radius: Math.random() * 3,
             color: 'red'
             //star colour and size
            }))
         }
        
         function creatParticles({Object, color, fades}){
            for(let i = 0; i< 15; i++){
                particles.push(new Particle({
                 position: {
                     x:Object.position.x + Object.width / 2,
                     y:Object.position.y + Object.height / 2
                 },
                 velocity: {
                     //distroy enmy speed         
                     x: (Math.random() - 0.5) * 2,
                     y: (Math.random() - 0.5) * 2
                     //distroy enmy speed
                 },
                 //distroy enmy colour and size
                 radius: Math.random() * 3,
                 color: color || 'yellow',
                 //distroy enmy colour and size
                 fades 
                }))
             }
         }
        
        
        function animate(){
            if(!game.active) return
            requestAnimationFrame(animate)
            c.fillStyle = 'black'
            c.fillRect(0, 0, canvas.width, canvas.height)
            
            player.update()
            particles.forEach((particle, i) => {
              
                if(particle.position.y - particle.radius >= canvas.
                    height){
                        particle.position.x = Math.random() * canvas.width
                        particle.position.y = -particle.radius
                    }
        
                if (particle.opacity <= 0) {
                    setTimeout(() =>{
                        particles.splice(i, 1)
                    }, 0)
                  
                }else{
                    particle.update()
                }
                
            })
            console.log(particles)
            invaderProjectiles.forEach((invaderProjectile, index) =>{
                if(invaderProjectile.position.y + invaderProjectile.
                    height >= canvas.height){
                        setTimeout(() =>{
                            invaderProjectiles.splice(index, 1)
                        }, 0)  
                    }else{
                        invaderProjectile.update()
                        if(invaderProjectile.position.y + invaderProjectile.
                            height >= player.position.y &&
                            invaderProjectile.position.x + invaderProjectile.width
                            >=
                            player.position.x &&
                            invaderProjectile.position.x <= player.position.x +
                            player.width){
                                me_distrov.play();
                                background.pause();

                                console.log('you lose')
                                game_over.play();
                                
                                setTimeout(() =>{
                                    invaderProjectiles.splice(index, 1)
                                    player.opacity = 0
                                    game.over = true
                                }, 0)  
                                
                                setTimeout(() =>{
                                    // alert("lose");
                                    game.active = false
                                    // game lose
                                    
                                   
                                    window.location = "over.html"
                                    // game lose
                                }, 2000)  
                                
                                creatParticles({
                                    Object: player,
                                    // we destroy colour
                                
                                    color: 'red',
                                    // we destroy colour
                                    fades: true
        
                                })
                            }
                    }
                invaderProjectile.update( )
            })
            projectiles.forEach((projectile, index )=>{
                if(projectile.position.y + projectile.radius <= 0){
                    setTimeout(() =>{
                        projectiles.splice(index, 1)
                    }, 0)
                    
                }else{
                    projectile.update()
                }
               
            })
            console.log(invaderProjectiles)
        
        grids.forEach((grid, gridIndex) =>{
            grid.update()
            if(frames % 100 === 0 && grid.invaders.length >0){
                grid.invaders[Math.floor(Math.random() * grid.invaders.
                    length)].shoot(invaderProjectiles)
            }
            grid.invaders.forEach((invader, i) => {
                invader.update({velocity: grid.velocity})
        
                //projecttile hit enmy
                projectiles.forEach((projectile, j) => {
                    if(projectile.position.y -projectile.radius <=
                        invader.position.y + invader.height && 
                        projectile.position.x + projectile.radius >=
                        invader.position.x &&      
                        projectile.position.x -projectile.radius <=
                        invader.position.x + invader.width &&
                        projectile.position.y + projectile.radius >= 
                        invader.position.y){
        
                         
                          
                            setTimeout(() => {
                                const invaderFound = grid.invaders.find(
                                    (invader2) =>invader2 === invader
                                )
                                const projectileFound = projectiles.find(
                                    (projectile2)=> projectile2 === projectile
                                )
                                // remove enmy
                                if(invaderFound && projectileFound){
                                    score +=10
                                    console.log(score)
                                    scoreEl.innerHTML = score
                                    if(score == 1260){
                                        won1.play();
                                        alert("level-2 Pass");
                                        window.location = "level3.html";
                                        setTimeout(() =>{
                                           
                                            game.active = false
                                          
                                           
                                           
                                        }, 2000)  
                                       
                                    }
                                    creatParticles({
                                        Object:invader,
                                        fades : true
                                    })
                                  
                                grid.invaders.splice(i, 1)
                                projectiles.splice(j, 1)
        
                                if(grid.invaders.length > 0){
                                    const firstInvader = grid.invaders[0]
                                    const lastInvader = grid.invaders[grid.
                                    invaders.length - 1]
        
                                    grid.width = lastInvader.position.x -
                                    firstInvader.position.x + lastInvader.width
                                    grid.position.x = firstInvader.position.x
                                    
                                }else{
                                    grids.splice(gridIndex, 1)
                                }
                                }
                            },0 )
                        }
                })
            })
        })
        
        
            if(keys.a.pressed && player.position.x >= 0){
                player.velocity.x = -7
                player.rotation = -0.15
            } else if(keys.d.pressed && player.position.x  +player.width <= canvas.width){
                player.velocity.x = 7
                player.rotation = 0.15
            } 
            else {
                player.velocity.x = 0
                player.rotation = 0
            }
            console.log(frames)
            if(frames % randomInterval === 0){
              
                grids.push(new Grid())
                // aluth enimi bihiwimee speed
                
                randomInterval =Math.floor(Math.random() * 500) + 250
                // aluth enimi bihiwimee speed
                frames = 0
                console.log(randomInterval)
            }
            
            frames++
        }
        animate()
        
        addEventListener('keydown', ({ key }) => {
            if(game.over)return
            
            switch (key){
                case 'a':
                    //  console.log('left')
                    
                     keys.a.pressed = true
                     break
                     case 'd':
                        // console.log('right')
                        keys.d.pressed = true
                        break
                        case ' ':
                            // console.log('space')
                             projectiles.push(
                                new projectile({
                                position: {
                                    x:player.position.x +player.width / 2,
                                    y:player.position.y
                                },
                                velocity: {
                                    x:0,
                                    y: -10
                                }
                             })
                             )
                            //  confirm.log(projectiles)
                            break
            }
        })
        
        addEventListener('keyup', ({ key }) => {
            
            switch (key){
                case 'a':
                    //  console.log('left')
                    
                     keys.a.pressed = false
                     break
                     case 'd':
                        // console.log('right')
                        keys.d.pressed = false
                        break
                        case ' ':
                            // console.log('space')
                            keys.a.pressed = false
                            break
            }
        })
        
    }
    
      
    
    
  } 

  