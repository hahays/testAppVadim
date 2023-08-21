import chromeWin from '../assets/chrome-win.png'
import chromeMac from '../assets/chrome-mac.png'
import chromeAndroid from '../assets/chrome-android.png'
import ffWin from '../assets/ff-win.png'
import ffMac from '../assets/ff-mac.png'
import ffAndroid from '../assets/ff-android.png'

export const tabsData = [
    {
        label: "Chrome",
        images: [
            {
                os: "Windows",
                url: chromeWin,
            },
            {
                os: "MacOS",
                url: chromeMac,
            },
            {
                os: "Android",
                url: chromeAndroid,
            },
        ],
    },
    {
        label: "FireFox",
        images: [
            {
                os: "Windows",
                url: ffWin,
            },
            {
                os: "MacOS",
                url: ffMac,
            },
            {
                os: "Android",
                url: ffAndroid,
            },
        ],
    }
];