<template>

  <div ref="intro" id="intro">
    <section ref="title" id="title">
      <h1 ref="headline">Magpie Studio</h1>
    </section>

    <div ref="bw-mask" class="mask" id="bw-mask">
      <section ref="bw" id="bw">
        <h1>Thinking in Black and White</h1>
      </section>
    </div>
    <div ref="col-mask" class="mask" id="col-mask">
      <section ref="colour" id="colour">
        <h1>Speaking in Colour</h1>
      </section>
    </div>
  </div>

</template>

<script>

  var VueScrollTo = require('vue-scrollto');

  export default {

    mounted () {
        this.parent = this.$refs.intro
        this.title = this.$refs.title
        this.bw = this.$refs.bw
        this.colour = this.$refs.colour
        this.headline = this.$refs.headline

        this.h = 350;

        window.requestAnimationFrame = window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (f) {
          setTimeout(f, 1000 / 60)
        }
        this.init()
    },

    methods: {
      animateElement () {

        var parentRect = this.parent.getBoundingClientRect()

        var scrollTop = parentRect.top
        var per = 1 - (scrollTop / (window.innerHeight || document.documentElement.clientHeight))*2
        var height = (window.innerHeight || document.documentElement.clientHeight) / per
        var setHeight = (window.innerHeight || document.documentElement.clientHeight) / 2

        //this.h += (this.h / per) / 200;
        
        if(per <= 2) {
          this.title.style.height = `${height}px`
          this.title.style.transform = `translate3d(0,0,0)`
        } else {
          this.title.style.height = `${setHeight}px`
          this.title.style.transform = `translate3d(0, ${scrollTop/2 + height/2}px ,0)`
        }

        this.bw.style.transform = `translate3d(0, ${scrollTop}px ,0)`

        this.colour.style.transform = `translate3d(0, ${scrollTop}px ,0)`

      },

      scrollHandler () {
        window.requestAnimationFrame(() => {
          if (this.isInView(this.parent)) {
            this.animateElement()
          }
        })
      },

      mouseHandler (e) {
        var event = e;
        window.requestAnimationFrame(() => {
          this.h = 200 + (event.clientX + event.clientY) / 10;
        })
      },

      isInView (el) {
        let rect = el.getBoundingClientRect()

        return (
          rect.bottom >= 0 &&
          rect.top <= (window.innerHeight || document.documentElement.clientHeight)
        )
      },

      setupListener () {
          window.addEventListener('scroll', this.scrollHandler, false)
          window.addEventListener('mousemove', this.mouseHandler, false)
          this.parent.addEventListener('click', this.scrollInto, false)
      },

      colorCycle () {
        window.requestAnimationFrame(() => {
          if (this.isInView(this.parent)) {
            this.colour.style.backgroundColor = `hsl(${this.h/1.5}, 70%, 50%)`
            //this.headline.style.color = `hsl(${this.h/1.5}, 70%, 50%)`
            this.colorCycle();
          }
        })
      },

      scrollInto () {

        var parentRect = this.parent.getBoundingClientRect()

        var offset = 0;
        var offset1 = -(window.innerHeight || document.documentElement.clientHeight) * 1
        var offset2 = -(window.innerHeight || document.documentElement.clientHeight) * 0.5

        var top = parentRect.top

        console.log(top, offset1, offset2, offset2 + offset1)

        if(top > offset1 - 2 && top > offset2) {
          offset = offset1
        } else if (top > offset1 + 2) {
          offset = offset2
        } else {
          offset = 0;
        }

        var options = {
            offset: offset
        }

        VueScrollTo.scrollTo('#start', 500, options)
      },

      init () {
        this.setupListener()
        this.animateElement()
        this.colorCycle()
      }
    }
  }
</script>

<style lang="scss">

  //@import "bourbon";
  @import "../layouts/variables";

  #intro {

    height: 150vh;
    background: white;
    cursor: pointer;

    section {
      height: 50vh;
      width: 100%;
      position: fixed;

      h1 {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate3d(-50%,-50%,0);
        margin: 0;
        user-select: none;
        font-size: $text-size-3;
        text-align: center;
        min-width: 80%;
      }
    }

    .mask {
      position: fixed;
      overflow: hidden;
      top: 0;
      left: 0;
      width: 100%;
      height: 50vh;
      z-index: 45;
      background: transparent;
      pointer-events: none;

      section {
        position: absolute;
        top: 0;
        pointer-events: auto;
      }
    }

    #bw-mask {
      top: 50%;
    }

    #title {
      height: 100vh;
      background: white;
      color: black;
      z-index: 40;
    }

    #bw {
      top: 50vh;
      background: black;
      color: white;
      z-index: 50;
    }

    #colour {
      top: 100vh;
      background: blue;
      color: white;
      z-index: 45;
    }
  }

</style>