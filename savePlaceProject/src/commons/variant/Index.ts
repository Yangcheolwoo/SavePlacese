import { css } from '@stitches/core';


export const FlexBasis = css({
  display: 'flex',
  alignItems : 'flex-start',
  justifyContent: 'flex-start',
  flexDirection : 'row',

  variants: {
    primary: {
      true:{
        width: 200,
      },
    },
    second: {
      true:{
        width: 500,
      }
    },

    fullWidth: {
      true : {
        width: '100%',
      }
    },
    fullHeight: {
      true : {
        height: '100%',
      }
    },
    column : {
      true : {
        flexDirection : 'column'
      }
    },
    start : {
      true : {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
      }
    },
    center : {
      true : {
        alignItems : 'center',
        justifyContent : 'center'
      }
    },
    end : {
      true : {
        alignItems: 'flex-end',
        justifyContent : 'flex-end',
      }
    }
  }
})