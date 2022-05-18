import topbar from "topbar";

const DarkTopLoaderBar = () => {

    topbar.config({
        autoRun      : true,
        barThickness : 4,
        barColors    : {
            '0'      : '#5680e9',
            '.25'    : '#5680e9',
            '.50'    : '#5680e9',
            '.75'    : '#5680e9',
            '1.0'    : '#5680e9'
        },
         shadowBlur   : 5,
        shadowColor  : 'rgba(0,   0,   0,   .6)'
      })
};

export default DarkTopLoaderBar