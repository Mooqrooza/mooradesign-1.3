const initialState = {
 lessWidth500: false,
 lessWidth600: false,
 lessWidth800: false,
 lessWidth1000: false,
 lessWidth1010: false,
 lessWidth1200: false,
 moreWidth1199: false,
 lessHeight500: false,
 lessHeight600: false,
 lessHeight700: false,
 lessHeight800: false,
 lessHeight1000: false,
 moreHeight999: false,
 windowHeight: 0,
};

const responsiveQuery = ( state = initialState, action ) => {
  const payload = action.payload;
  switch (action.type) {
    case 'WIN_HEIGHT':
      return { ...state,
        windowHeight: payload
      };
    /* less width query*/
    case 'LESS_HEIGHT_500':
      return { ...state,
        lessHeight500: true,
        lessHeight600: true,
        lessHeight700: true,
        lessHeight800: true,
        lessHeight1000: true,
        moreHeight999: false,
       };
    case 'LESS_HEIGHT_600':
      return { ...state,
        lessHeight500: false,
        lessHeight600: true,
        lessHeight700: true,
        lessHeight800: true,
        lessHeight1000: true,
        moreHeight999: false,
      };
    case 'LESS_HEIGHT_700':
      return { ...state,
        lessHeight500: false,
        lessHeight600: false,
        lessHeight700: true,
        lessHeight800: true,
        lessHeight1000: true,
        moreHeight999: false,
       };
    case 'LESS_HEIGHT_800':
      return { ...state,
        lessHeight500: false,
        lessHeight600: false,
        lessHeight700: false,
        lessHeight800: true,
        lessHeight1000: true,
        moreHeight999: false,
      };
    case 'LESS_HEIGHT_1000':
      return { ...state,
        lessHeight500: false,
        lessHeight600: false,
        lessHeight700: false,
        lessHeight800: false,
        lessHeight1000: true,
        moreHeight999: false,
      };
    case 'MORE_HEIGHT_999':
      return { ...state,
        lessHeight500: false,
        lessHeight600: false,
        lessHeight700: false,
        lessHeight800: false,
        lessHeight1000: false,
        moreHeight999: true,
      };
    /* less width query*/
    case 'LESS_WIDTH_500':
      return { ...state,
        lessWidth500: true,
        lessWidth600: true,
        lessWidth800: true,
        lessWidth1000: true,
        lessWidth1010: true,
        lessWidth1200: true,
        moreWidth1199: false,
       };
    case 'LESS_WIDTH_600':
      return { ...state,
        lessWidth500: false,
        lessWidth600: true,
        lessWidth800: true,
        lessWidth1000: true,
        lessWidth1010: true,
        lessWidth1200: true,
        moreWidth1199: false,
       };
    case 'LESS_WIDTH_800':
      return { ...state,
        lessWidth500: false,
        lessWidth600: false,
        lessWidth800: true,
        lessWidth1000: true,
        lessWidth1010: true,
        lessWidth1200: true,
        moreWidth1199: false,
       };
    case 'LESS_WIDTH_1000':
      return { ...state,
        lessWidth500: false,
        lessWidth600: false,
        lessWidth800: false,
        lessWidth1000: true,
        lessWidth1010: true,
        lessWidth1200: true,
        moreWidth1199: false,
       };
    case 'LESS_WIDTH_1010':
      return { ...state,
        lessWidth500: false,
        lessWidth600: false,
        lessWidth800: false,
        lessWidth1000: false,
        lessWidth1010: true,
        lessWidth1200: true,
        moreWidth1199: false,
       };
    case 'LESS_WIDTH_1200':
      return { ...state,
        lessWidth500: false,
        lessWidth600: false,
        lessWidth800: false,
        lessWidth1000: false,
        lessWidth1010: false,
        lessWidth1200: true,
        moreWidth1199: false,
      };
    case 'MORE_WIDTH_1199':
       return { ...state,
         lessWidth500: false,
         lessWidth600: false,
         lessWidth800: false,
         lessWidth1000: false,
         lessWidth1010: false,
         lessWidth1200: false,
         moreWidth1199: true,
       };
    default:
      return state;
  }
};

export default responsiveQuery;
