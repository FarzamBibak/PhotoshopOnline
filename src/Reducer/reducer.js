// reducer.js

const initialStates = {
    paintColor: 'black',
    paintLineWidth: '1',
    mouseShape: '',
    isSelected: 0,
    selectX1: '',
    selectX2: '',
    selectY1: '',
    selectY2: '',
    moveX1: '',
    moveX2: '',
    moveY1: '',
    moveY2: '',
    isTouchedTopCrop: 0,
    isTouchedLeftCrop: 0,
    isTouchedRightCrop: 0,
    isTouchedDownCrop: 0,
    yTopCrop: '',
    yDownCrop: '',
    xRightCrop: '',
    xLeftCrop: '',
    scaleRatio: 1,
    canvasStyle: '',
    rotateAngle: '',
    textFont: '',
    textSize: 12,
    textPositionX: '',
    textPositionY: '',
    panelDisplay: 0,
    Image_src: '',
    bodyWidth: '',
    bodyHeight: '',
    imgWidth: 0,
    imgHeight: 0,
    zoomShowValue: 100,
    zoomUseValue: 1,
    imgLoad: 0,
}

function ChangeImageSize(state, width, height) {
    if (state.imgLoad == 0) {
        return {
            ...state,
            imgWidth: width,
            imgHeight: height,
            imgLoad: state.imgLoad + 1,
        }
    } else {
        return {
            ...state
        }
    }
}

function setDisplaySettings(state, display) {
    if (display === 1) {
        return {
            ...state,

            panelDisplay: 1,
        }
    } else if (display === 0) {
        return {
            ...state,

            panelDisplay: 0,
        }
    }
}

// function checkCounter(state, counter, action) {
//     if (counter == 0) {
//         return {
//             ...state,

//             imgWidth: action.payload.imgWidth,
//             imgHeight: action.payload.imgHeight,
//             canvas: action.payload.canvas,

//             counter: 1,
//         }
//     } else if (counter == 1) {
//         return {
//             ...state,

//             canvas: action.payload.canvas,

//             imgLoad: state.imgLoad + 1,
//         }
//     }
// }

export const settingsReducer = (state = initialStates, action) => {
    switch (action.type) {
        case "changeSrc":
            return {
                ...state,

                Image_src: action.payload.Image_src,
                counter: 0,
            }

        case "paintSettings":
            return {
                ...state,

                mouseShape: "paintShape",

                paintColor: action.payload.color,
                paintLineWidth: action.payload.width,
            }

        case "selectSettings":
            return {
                ...state,

                isSelected: 1,
                mouseShape: "selectShape",

                selectX1: action.payload.x1,
                selectY1: action.payload.y1,
                selectX2: action.payload.x2,
                selectY2: action.payload.y2,
            }

        case "moveSettings":
            return {
                ...state,

                mouseShape: "moveShape",

                moveX1: action.payload.x1,
                moveY1: action.payload.y1,
                moveX2: action.payload.x2,
                moveY2: action.payload.y2,
            }

        // case "cropSettings":
        //     let touchTop = 0,
        //         touchDown = 0,
        //         touchLeft = 0,
        //         touchRight = 0

        //     if (action.payload.yTop) {
        //         touchTop = 1
        //     }
        //     else if (action.payload.yDown) {
        //         touchDown = 1
        //     }
        //     else if (action.payload.xLeft) {
        //         touchLeft = 1
        //     }
        //     else if (action.payload.xRight) {
        //         touchRight = 1
        //     }

        //     return {
        //         ...state,

        //         isTouchedTopCrop: touchTop,
        //         isTouchedDownCrop: touchDown,
        //         isTouchedLeftCrop: touchLeft,
        //         isTouchedRightCrop: touchRight,

        //         yTopCrop: action.payload.yTop,
        //         yDownCrop: action.payload.yDown,
        //         xLeftCrop: action.payload.xLeft,
        //         xRightCrop: action.payload.xRight,
        //     }

        // case "scaleSettings":
        //     return {
        //         ...state,

        //         scaleRatio: action.payload.ratio,
        //     }

        case "filterImageSettings":
            return {
                ...state,

                canvasStyle: action.payload.css,
            }

        case "rotateSettings":
            return {
                ...state,

                rotateAngle: action.payload.angle,
            }

        case "textSettings":
            return {
                ...state,

                textFont: action.payload.font,
                textSize: action.payload.size,
                textPositionX: action.payload.positionX,
                textPositionY: action.payload.positionY,
            }

        // case "doneButton":
        //     if (action.payload.closePanel) {
        //         return {
        //             ...state,

        //             panelDisplay: 0,
        //         }
        //     }

        case "displayPanel":
            return setDisplaySettings(state, action.payload.display)

        case "bodySize":
            return {
                ...state,

                bodyWidth: action.payload.bodyWidth,
                bodyHeight: action.payload.bodyHeight,
            }

        case "imgSize":
            return ChangeImageSize(state, action.payload.imgWidth, action.payload.imgHeight)


        case "zoomValue":
            return {
                ...state,

                zoomShowValue: action.payload.showValue,
                zoomUseValue: action.payload.useValue,
                imgWidth: action.payload.imgWidth,
            }

        default:
            return initialStates;
    }
}
