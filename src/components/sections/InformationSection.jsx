const ABOUT_TEXT =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const PURPOSE_TEXT =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";


export default function InformationSection() {
  return (
    <>
      <style>{`

        .ii-section {
          position: relative;
          width: 100%;
          overflow: visible;
          background: transparent;

          scroll-margin-top:
            calc(
              var(--navbar-height, 82px)
              + 18px
            );
        }


        .ii-frame {

          position: relative;

          width:
            min(
              100%,
              1440px
            );

          aspect-ratio:
            1440 / 1628;

          margin-inline: auto;

          overflow: visible;

          container-type: inline-size;

          isolation: isolate;
        }


        /* ===============================
           TITLE
        =============================== */

        .ii-heading {

          position: absolute;

          left:
            19.307cqw;

          top:
            8.264cqw;

          width:
            60.972cqw;

          z-index: 20;

          text-align: center;

        }


        .ii-heading-line {

          display:flex;

          justify-content:center;

          align-items:baseline;

          white-space:nowrap;

          font-family:
            "Tektur",
            sans-serif;

          font-weight:800;

          text-transform:uppercase;

          text-shadow:

            9px
            8px
            0px
            rgba(
              172,
              74,
              253,
              1
            );
        }


        .ii-heading-yellow {

          color:#FFD900;

          font-size:
            7.919cqw;

          line-height:
            5.940cqw;

        }


        .ii-heading-white {

          color:white;

          font-size:
            7.128cqw;

          line-height:
            5.346cqw;

        }


        /* ===============================
           COMMON BODY TEXT
        =============================== */

        .ii-body {

          color:white;

          font-family:
            "Londrina Solid",
            sans-serif;

          font-size:
            2.222cqw;

          font-weight:
            300 !important;

          font-synthesis:none;

          text-shadow:none;

          -webkit-text-stroke:
            0;

          -webkit-font-smoothing:
            antialiased;

          line-height:
            1.2;

        }


        /* ===============================
           ABOUT PANEL
        =============================== */

        .ii-about {

          position:absolute;

          left:
            4.236cqw;

          top:
            27.733cqw;


          width:
            90.765cqw;


          height:
            29.532cqw;


          background:
            rgba(
              41,
              54,
              62,
              .60
            );


          border:
            .592cqw
            solid
            #FFD900;


          border-radius:
            1.847cqw;


          box-shadow:

            0
            0
            3.289cqw
            #FFD900;


          z-index:6;

        }


        .ii-about-label {

          position:absolute;

          left:
            7.465cqw;

          top:
            25.160cqw;

          width:
            32.351cqw;


          height:
            6.801cqw;


          z-index:10;


          display:flex;

          align-items:center;

          justify-content:center;


          transform:
            rotate(-3deg);


          background:
            #FFFBE4;


          border:
            .542cqw
            solid
            #FFD900;


          border-radius:
            .658cqw;


          box-shadow:

            0
            0
            2.708cqw
            #FFD900;


        }


        .ii-about-label span {

          color:#DFB009;


          font-family:
            "Londrina Solid",
            sans-serif;


          font-size:
            42.98px;


          font-weight:
            900;


          text-transform:
            uppercase;


          line-height:
            47.67px;


          letter-spacing:
            .86px;


          text-shadow:

            5px
            5px
            5px
            rgba(
              0,
              0,
              0,
              .25
            );

        }


        .ii-about-text {

          position:absolute;


          left:
            8.708cqw;


          top:
            32.760cqw;


          width:
            81.294cqw;


          z-index:8;


          text-align:left;

        }


        /* ===============================
           PURPOSE PANEL
        =============================== */


        .ii-purpose {

          position:absolute;


          left:
            4.724cqw;


          top:
            64.747cqw;


          width:
            91.042cqw;


          height:
            29.622cqw;


          background:
            rgba(
              41,
              54,
              62,
              .60
            );


          border:
            .594cqw
            solid
            #189CF4;


          border-radius:
            1.852cqw;


          box-shadow:

            0
            0
            3.299cqw
            #189CF4;


          z-index:6;

        }


        .ii-purpose-label {

          position:absolute;


          left:
            61.541cqw;


          top:
            61.764cqw;


          width:
            32.307cqw;


          height:
            5.683cqw;


          z-index:10;


          display:flex;


          align-items:center;


          justify-content:center;


          transform:
            rotate(-3deg);


          background:
            #D5EEFF;


          border:
            .293cqw
            solid
            #189CF4;


          border-radius:
            .660cqw;


          box-shadow:

            0
            0
            1.464cqw
            #52B7FB;


        }


        .ii-purpose-label span {

          color:#189CF4;


          font-family:
            "Londrina Solid",
            sans-serif;


          font-size:
            43.11px;


          font-weight:
            900;


          text-transform:
            uppercase;


          line-height:
            47.82px;


          letter-spacing:
            .86px;


          text-shadow:

            5px
            5px
            5px
            rgba(
              0,
              0,
              0,
              .25
            );

        }


        .ii-purpose-text {

          position:absolute;


          left:
            9.935cqw;


          top:
            69.397cqw;


          width:
            81.542cqw;


          z-index:8;


          text-align:right;

        }
        /* ===============================
           DECORATION RIGHT PINK
        =============================== */

        .ii-pink {

          position:absolute;

          right:
            3.5cqw;

          top:
            42cqw;

          width:
            14.035cqw;

          height:
            14.035cqw;


          background:
            #FF59FB;


          border-radius:
            2.190cqw;


          transform:
            rotate(64deg);


          z-index:5;

        }


        .ii-pink::after {

          content:"";

          position:absolute;

          inset:
            1.35cqw;


          border:
            .934cqw
            solid
            white;


          border-radius:
            1.277cqw;

        }



        /* ===============================
           DECORATION LEFT YELLOW
        =============================== */

        .ii-yellow {

          position:absolute;

          left:
            1.45cqw;


          top:
            85.347cqw;


          width:
            15.070cqw;


          height:
            15.070cqw;


          background:
            #FFD900;


          border-radius:
            50%;


          z-index:5;

        }



        .ii-yellow::after {

          content:"";

          position:absolute;

          inset:
            1.467cqw;


          border:
            1.065cqw
            solid
            white;


          border-radius:
            50%;

        }



        /* ===============================
           DETAIL INFORMATION BUTTON
        =============================== */

        .ii-detail {

          position:absolute;


          left:
            50%;


          top:
            99.1cqw;


          transform:
            translateX(-50%)
            rotate(-1deg);


          width:
            27.034cqw;


          height:
            6.713cqw;


          display:flex;


          align-items:center;


          justify-content:center;


          text-decoration:none;


          cursor:pointer;


          z-index:20;


          color:
            #9513FF;


          background:
            #EAD8F9;


          border:
            .604cqw
            solid
            #9513FF;


          border-radius:
            .694cqw;


          box-shadow:


            0
            0
            3.022cqw
            #9513FF,


            inset
            0
            -5.818cqw
            .250cqw
            #DFC5F4;



          font-family:
            "Londrina Solid",
            sans-serif;


          font-size:
            2.328cqw;


          font-weight:
            900;


          text-transform:
            uppercase;


          line-height:
            1;


          letter-spacing:
            .117cqw;


          text-shadow:


            .417cqw
            .417cqw
            .347cqw
            rgba(
              0,
              0,
              0,
              .25
            );


          transition:
            .2s ease;

        }



        .ii-detail:hover {

          filter:
            brightness(1.08);


          transform:
            translateX(-50%)
            translateY(-.2cqw)
            rotate(-1deg);

        }



        @media(
          min-width:1441px
        ){

          .ii-frame{

            width:
              1440px;

            height:
              1628px;

          }

        }



        @media(
          max-width:900px
        ){

          .ii-body{

            font-size:
              max(
                10px,
                2.222cqw
              );

          }

        }


        @media(
          prefers-reduced-motion:reduce
        ){

          .ii-detail{

            transition:none;

          }

        }


      `}</style>



      <section
        id="information"
        className="ii-section"
      >


        <div className="ii-frame">


          {/* TITLE */}

          <div
            className="ii-heading"
          >

            <div className="ii-heading-line">

              <span className="ii-heading-yellow">
                I
              </span>

              <span className="ii-heading-white">
                nterface
              </span>

            </div>



            <div className="ii-heading-line">

              <span className="ii-heading-yellow">
                I
              </span>

              <span className="ii-heading-white">
                nformation
              </span>

            </div>


          </div>




          {/* ABOUT */}


          <div className="ii-about" />


          <div className="ii-about-label">

            <span>
              APA ITU INTERFACE?
            </span>

          </div>



          <p
            className="
              ii-body
              ii-about-text
            "
          >
            {ABOUT_TEXT}
          </p>




          {/* PURPOSE */}



          <div className="ii-purpose" />



          <div className="ii-purpose-label">

            <span>
              TUJUAN INTERFACE
            </span>

          </div>



          <p
            className="
              ii-body
              ii-purpose-text
            "
          >

            {PURPOSE_TEXT}

          </p>




          {/* ICON */}


          <div
            className="ii-pink"
          />



          <div
            className="ii-yellow"
          />




          {/* DETAIL BUTTON */}

          <a
            href="/detail-information"
            className="ii-detail"
          >

            DETAIL INFORMATION

          </a>



        </div>


      </section>

    </>
  );
}