<template>
<div class="container">
    <div class="title">
    <h1>Juggling Patterns</h1>
    <h2 id="title">{{patternTitle}}</h2>
    </div>
  <div class="svg-container">
  <svg class="juggler" width="400px" height="400px" viewBox="-10 -10 90 85" id="Layer_1_1_" style="enable-background:new 0 0 64 64;" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    
      <!--  balls  -->
      <circle class="cascade-left-ball" :class="leftBallClass" id="left-ball" cx="9" cy="32" r="8" fill="red" stroke="black"/>
    
    <circle class="cascade-right-ball" :class="rightBallClass" id="right-ball" cx="9" cy="32" r="8" fill="blue" stroke="black"/>
    
    <circle class="cascade-top-ball" :class="topBallClass" id="top-ball" cx="9" cy="32" r="8" fill="green" stroke="black"/>
    
      <!--  hands  -->
    <g>
  <path id="right-hand" d="M59.852,41h-0.164c-0.66,0-1.293,0.203-1.83,0.586L51.68,46h-6.266l2.672-2.672C48.675,42.739,49,41.955,49,41.121   C49,39.4,47.6,38,45.879,38H45.69c-0.664,0-1.299,0.207-1.836,0.597l-7.147,5.198C34.386,45.483,33,48.204,33,51.074V63h2v-2h5v2h2   v-2.808l1.063-2.658c0.4-1,1.312-1.712,2.38-1.858l6.588-0.898c1.583-0.216,3.057-0.975,4.151-2.138l5.961-6.334   C62.696,45.719,63,44.953,63,44.148C63,42.412,61.588,41,59.852,41z M60.688,44.935l-5.961,6.334   c-0.782,0.831-1.835,1.373-2.966,1.527l-6.588,0.898c-1.78,0.243-3.3,1.43-3.967,3.097L40.323,59H35v-7.926   c0-2.232,1.078-4.348,2.883-5.661l7.147-5.198C45.223,40.074,45.451,40,45.69,40h0.189C46.497,40,47,40.503,47,41.121   c0,0.3-0.117,0.581-0.328,0.793l-6.379,6.379l1.414,1.414L43.414,48h8.906l6.701-4.787C59.217,43.074,59.448,43,59.688,43h0.164   C60.485,43,61,43.515,61,44.148C61,44.441,60.889,44.721,60.688,44.935z"/>
    
    
  <path id="left-hand" d="M27.294,43.795l-7.148-5.199C19.609,38.207,18.974,38,18.31,38h-0.189C16.4,38,15,39.4,15,41.121   c0,0.834,0.325,1.618,0.914,2.207L18.586,46H12.32l-6.179-4.414C5.604,41.203,4.972,41,4.312,41H4.148C2.412,41,1,42.412,1,44.148   c0,0.805,0.304,1.571,0.856,2.158l5.961,6.334c1.095,1.163,2.569,1.922,4.151,2.138l6.588,0.898c1.068,0.146,1.98,0.858,2.38,1.859   L22,60.192V63h2v-2h5v2h2V51.074C31,48.204,29.614,45.483,27.294,43.795z M29,59h-5.323l-0.883-2.208   c-0.667-1.668-2.187-2.854-3.967-3.098l-6.588-0.898c-1.13-0.154-2.184-0.697-2.966-1.527l-5.961-6.334   C3.111,44.721,3,44.441,3,44.148C3,43.515,3.515,43,4.148,43h0.164c0.241,0,0.472,0.074,0.667,0.214L11.68,48h8.906l1.707,1.707   l1.414-1.414l-6.379-6.379C17.117,41.702,17,41.421,17,41.121C17,40.503,17.503,40,18.121,40h0.189c0.239,0,0.467,0.074,0.66,0.214   l7.147,5.198C27.922,46.726,29,48.842,29,51.074V59z"/></g>
  </svg>
  </div>
  
  <button id="btn" type="button" @click="handleChangePattern">Change pattern</button>
    
    <button id="cycle-btn" :class="buttonCycleClass" type="button" @click="toggleCycle">Cycle: <span id="cycle-status">{{cycleStatus}}</span></button>
    
  </div>
</template>

<script>

const patterns = [
    {
    pattern: "cascade",
    classes: [
        'cascade-left-ball',
        'cascade-right-ball',
        'cascade-top-ball',
    ]
    },
    // { pattern: "box",
    //     classes: [
    //     'box-left-ball',
    //     'box-right-ball',
    //     'box-top-ball',
    //     ]
    // },
    { pattern: "triangle",
        classes: [
        'triangle-left-ball',
        'triangle-right-ball',
        'triangle-top-ball',
        ]},
    { pattern: "columns",
        classes: [
        'columns-left-ball',
        'columns-right-ball',
        'columns-top-ball',
        ]},
    ]

export default {
  name: 'juggler',
    data(){
        return{
            currentPattern: 0,
            isCycling: false
        }
    },
    mounted(){
        // Change the pattern if cycle is on
        setInterval(()=>{
        if(this.isCycling){
            this.handleChangePattern()
        }
        },5000)
    },
    computed:{
        buttonCycleClass(){
            return this.isCycling ? 'is-pressed' : ''
        },
        cycleStatus(){
            return this.isCycling ? 'ON' : 'OFF'
        },
        patternTitle(){
            return patterns[this.currentPattern].pattern
        },
        leftBallClass(){
            return patterns[this.currentPattern].classes[0]
        },
        rightBallClass(){
            return patterns[this.currentPattern].classes[1]
        },
        topBallClass(){
            return patterns[this.currentPattern].classes[2]
        }
    },
    methods:{
        toggleCycle(){            
            this.isCycling = !this.isCycling
        },
        handleChangePattern(){
            console.log("old pattern: "+this.currentPattern+": "+patterns[this.currentPattern].pattern)
            console.log(patterns[this.currentPattern])

            // Increment the currentPattern, wrap around at end of array
            if(this.currentPattern == patterns.length-1){
                this.currentPattern = 0;
            }
            else{
                this.currentPattern++
            }

            console.log("new pattern: "+this.currentPattern+": "+patterns[this.currentPattern].pattern)
            console.log(patterns[this.currentPattern])

            }

    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap');

html{
  font-family: 'Roboto Condensed', sans-serif;
  background-color: #eee;
  text-align: center;
}


.svg-container{
  display: block;
  margin: auto;
  border: 1px solid grey;
  border-radius: 40px;
  background-color: white;
  max-width: 450px;
  min-width: 300px
}

.title{
  text-align: center;
}


button{
  padding: 10px;
  border-radius: 10px;
  margin: auto;
  margin-top: 20px;
  font-size: 18px;
  background-color: white;
  font-family: 'Roboto Condensed', sans-serif;
}

button:hover{
  background-color: #eee
}

.is-pressed{
  background-color: rgba(51, 153, 51, 0.2)
}

.is-pressed:hover{
  background-color: rgba(51, 153, 51, 0.3)
}

@keyframes left-hand-animation {
    0% {
        transform: rotate(0deg);
        transform-origin: bottom right 60px;
    }
    50% {
       transform: rotate(1deg);
      transform-origin: bottom right 60px;
    }
      100% {
       transform: rotate(0deg);
       transform-origin: bottom right 60px;
    }
}

@keyframes right-hand-animation {
    0% {
        transform: rotate(0deg);
        transform-origin: bottom left 60px;
    }
    50% {
       transform: rotate(1deg);
      transform-origin: bottom left 60px;
    }
      100% {
       transform: rotate(0deg);
       transform-origin: bottom left 60px;
    }
}

@keyframes cascade-ball-animation{
  0%{
    transform: translateX(0);
  } 
  25%{
    transform: translateX(30px) translateY(-23px);
  }
  50%{
    transform: translateX(45px) translateY(0);
  }
  75%{
    transform: translateX(15px) translateY(-23px);
  }
  100%{
    transform: translateX(0) translateY(0);
  }
}

@keyframes box-left-ball-animation{
  0%{
    transform: translateX(40px) translateY(-30px);
  } 
  50%{
    transform: translateX(40px);
  }
  100%{
    transform: translateX(40px) translateY(-30px);
  }
}

@keyframes box-top-ball-animation{
  0%{
    transform: translateX(40px);
  } 
  50%{
    transform: translateX(0);
  }
  100%{
    transform: translateX(40px);
  }
}

@keyframes box-right-ball-animation{
  0%{
    transform: translateX(0);
  } 
  50%{
    transform: translateY(-30px);
  }
  100%{
    transform: translateY(0);
  }
}

@keyframes triangle-ball-animation{
  0%{
    transform: translateX(0);
  } 
  33%{
    transform: translateX(23px) translateY(-23px);
  }
  66%{
    transform: translateX(45px) translateY(0);
  }
  100%{
    transform: translateX(0) translateY(0);
  }
}

@keyframes columns-right-ball-animation{
  0%{
    transform: translateX(45px);
  } 
  50%{
    transform: translateX(45px) translateY(-30px);
  }
  100%{
    transform: translateX(45px);
  }
}

@keyframes columns-top-ball-animation{
  0%{
    transform: translateX(24px) translateY(-30px);
  } 
  50%{
    transform: translateX(24px) translateY(0px);
  }
  100%{
    transform: translateX(24px) translateY(-30px);
  }
}

@keyframes columns-left-ball-animation{
  0%{
    transform: translateY(0);
  } 
  50%{
    transform: translateY(-30px);
  }
  100%{
    transform: translateY(0);
  }
}

#left-hand{
  animation: left-hand-animation 1s -1s infinite ease-in-out forwards
}

#right-hand{
  animation: right-hand-animation 1s 0s infinite ease-in-out forwards
}


.box-left-ball{
    animation: box-left-ball-animation 2s -1s infinite ease-in-out forwards;
} 

.box-right-ball{
  animation: box-right-ball-animation 2s -1s infinite ease-in-out forwards;
}

.box-top-ball{
  animation: box-top-ball-animation 2s -1s infinite ease-in-out forwards;
}

.cascade-left-ball{
    animation: cascade-ball-animation 3s -1s infinite ease-in-out forwards;
} 

.cascade-right-ball{
  animation: cascade-ball-animation 3s 0s infinite ease-in-out forwards;
}

.cascade-top-ball{
  animation: cascade-ball-animation 3s -2s infinite ease-in-out forwards;
}

.triangle-left-ball{
    animation: triangle-ball-animation 3s -1s infinite ease-in-out forwards;
} 

.triangle-right-ball{
  animation: triangle-ball-animation 3s 0s infinite ease-in-out forwards;
}

.triangle-top-ball{
  animation: triangle-ball-animation 3s -2s infinite ease-in-out forwards;
}

.columns-left-ball{
    animation: columns-left-ball-animation 2s -1s infinite ease-in-out forwards;
} 

.columns-right-ball{
  animation: columns-right-ball-animation 2s -1s infinite ease-in-out forwards;
}

.columns-top-ball{
  animation: columns-top-ball-animation 2s -1s infinite ease-in-out forwards;
}

/* @media(max-width:470px){
  svg-container{
    width: 90%;
  }
} */
</style>