export class Color {
    private static regHex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/gi;

    public static RED = {
        ACCENT: Color.fromHex('#FF5252'),
        NORMAL: Color.fromHex('#F44336'),
        DARK: Color.fromHex('#D32F2F'),
        DARKER: Color.fromHex('#C62828'),
    };
    public static PINK = {
        ACCENT: Color.fromHex('#FF4081'),
        NORMAL: Color.fromHex('#E91E63'),
        DARK: Color.fromHex('#C2185B'),
        DARKER: Color.fromHex('#AD1457'),
    };
    public static PURPLE = {
        ACCENT: Color.fromHex('#E040FB'),
        NORMAL: Color.fromHex('#9C27B0'),
        DARK: Color.fromHex('#7B1FA2'),
        DARKER: Color.fromHex('#6A1B9A'),
    };
    public static ['DEEP-PURPLE'] = {
        ACCENT: Color.fromHex('#7C4DFF'),
        NORMAL: Color.fromHex('#673AB7'),
        DARK: Color.fromHex('#512DA8'),
        DARKER: Color.fromHex('#4527A0'),
    };
    public static INDIGO = {
        ACCENT: Color.fromHex('#536DFE'),
        NORMAL: Color.fromHex('#3F51B5'),
        DARK: Color.fromHex('#303F9F'),
        DARKER: Color.fromHex('#283593'),
    };
    public static BLUE = {
        ACCENT: Color.fromHex('#448AFF'),
        NORMAL: Color.fromHex('#2196F3'),
        DARK: Color.fromHex('#1976D2'),
        DARKER: Color.fromHex('#1565C0'),
    };
    public static ['LIGHT-BLUE'] = {
        ACCENT: Color.fromHex('#40C4FF'),
        NORMAL: Color.fromHex('#03A9F4'),
        DARK: Color.fromHex('#0288D1'),
        DARKER: Color.fromHex('#0277BD'),
    };
    public static CYAN = {
        ACCENT: Color.fromHex('#18FFFF'),
        NORMAL: Color.fromHex('#00BCD4'),
        DARK: Color.fromHex('#0097A7'),
        DARKER: Color.fromHex('#00838F'),
    };
    public static TEAL = {
        ACCENT: Color.fromHex('#64FFDA'),
        NORMAL: Color.fromHex('#009688'),
        DARK: Color.fromHex('#00796B'),
        DARKER: Color.fromHex('#00695C'),
    };
    public static GREEN = {
        ACCENT: Color.fromHex('#69F0AE'),
        NORMAL: Color.fromHex('#4CAF50'),
        DARK: Color.fromHex('#388E3C'),
        DARKER: Color.fromHex('#2E7D32'),
    };
    public static ['LIGHT-GREEN'] = {
        ACCENT: Color.fromHex('#B2FF59'),
        NORMAL: Color.fromHex('#8BC34A'),
        DARK: Color.fromHex('#689F38'),
        DARKER: Color.fromHex('#558B2F'),
    };
    public static LIME = {
        ACCENT: Color.fromHex('#EEFF41'),
        NORMAL: Color.fromHex('#CDDC39'),
        DARK: Color.fromHex('#AFB42B'),
        DARKER: Color.fromHex('#9E9D24'),
    };
    public static YELLOW = {
        ACCENT: Color.fromHex('#FFFF00'),
        NORMAL: Color.fromHex('#FFEB3B'),
        DARK: Color.fromHex('#FBC02D'),
        DARKER: Color.fromHex('#F9A825'),
    };
    public static AMBER = {
        ACCENT: Color.fromHex('#FFD740'),
        NORMAL: Color.fromHex('#FFC107'),
        DARK: Color.fromHex('#FFA000'),
        DARKER: Color.fromHex('#FF8F00'),
    };
    public static ORANGE = {
        ACCENT: Color.fromHex('#FFAB40'),
        NORMAL: Color.fromHex('#FF9800'),
        DARK: Color.fromHex('#F57C00'),
        DARKER: Color.fromHex('#EF6C00'),
    };
    public static ['DEPP-ORANGE'] = {
        ACCENT: Color.fromHex('#FF6E40'),
        NORMAL: Color.fromHex('#FF5722'),
        DARK: Color.fromHex('#E64A19'),
        DARKER: Color.fromHex('#D84315'),
    };
    public static BROWN = {
        ACCENT: Color.fromHex('#4E342E'),
        NORMAL: Color.fromHex('#795548'),
        DARK: Color.fromHex('#5D4037'),
        DARKER: Color.fromHex('#4E342E'),
    };
    public static GREY = {
        ACCENT: Color.fromHex('#000000'),
        NORMAL: Color.fromHex('#9E9E9E'),
        DARK: Color.fromHex('#616161'),
        DARKER: Color.fromHex('#424242'),
    };
    public static ['BLUE-GREY'] = {
        ACCENT: Color.fromHex('#37474F'),
        NORMAL: Color.fromHex('#607D8B'),
        DARK: Color.fromHex('#455A64'),
        DARKER: Color.fromHex('#37474F'),
    };

    R : number;
    G: number;
    B: number;

    constructor(R: number,G: number,B: number) {
        this.R = R;
        this.G = G;
        this.B = B;
    }

    // @ts-ignore
    public static fromHex(hex: string) {
        if (Color.regHex.test(hex)) {
            let sets = Color.parseSets(hex.substring(1, hex.length));
            return new Color(sets.set1, sets.set2, sets.set3);
        } else {
            return  new Color(0,0,0);
        }
    }

    private static parseSet(sets: string, i: number, isSmall: boolean) {
        let modifier = isSmall ? 1 : 2;
        let set = sets.substring(i * modifier, (i + 1) * modifier);
        return parseInt(isSmall ? set + set : set, 16);
    }

    private static parseSets(sets: string): {set1: number, set2: number, set3: number} {
        let isSmall = sets.length === 3;
        return {
            set1: Color.parseSet(sets, 0,isSmall),
            set2: Color.parseSet(sets, 1,isSmall),
            set3: Color.parseSet(sets, 2,isSmall)
        }
    }
}
