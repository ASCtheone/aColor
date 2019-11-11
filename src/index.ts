interface _color {
  R: ColorItem;
  G: ColorItem;
  B: ColorItem;
  A: ColorItem;
}
interface _simpleColor {
  R: number;
  G: number;
  B: number;
  A?: number;
}
interface ColorItem {
  e?: string;
  value?: number;
}
interface ColorItemIterator extends ColorItem {
  done: boolean
}
interface HslColor {
  H: number;
  S: number;
  L: number;
}

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
    private _colorRGB: _color = { R: {e: 'R', value:0 }, G: {e: 'G', value:0 }, B: {e: 'B', value:0 }, A: {e: 'A', value:0 } }

    get R() : number | undefined {
      return this.colorRGB.R.value;
    }
    set R(R: number | undefined) {
      this.colorRGB.R.value = R;
    }
    get G() : number | undefined {
      return this.colorRGB.G.value;
    }
    set G(G: number | undefined) {
      this.colorRGB.G.value = G;
    }
    get B() : number | undefined {
      return this.colorRGB.B.value;
    }
    set B(B: number | undefined) {
      this.colorRGB.B.value = B;
    }
    get A() : number | undefined {
      return this.colorRGB.A.value;
    }
    set A(A: number | undefined) {
      this.colorRGB.A.value = A;
    }

    set RGB(color: _simpleColor) {
      this.colorRGB.R.value = color.R;
      this.colorRGB.G.value = color.G;
      this.colorRGB.B.value = color.B;
      this.colorRGB.A.value = color.A;
    }

    get RGB(): _simpleColor {
      return {
        R: this.colorRGB.R.value || 0,
        G: this.colorRGB.G.value || 0,
        B: this.colorRGB.B.value || 0,
        A: this.colorRGB.A.value
      }
    }

    get Hex(): string {
      return `#${this.getHex('R')}${this.getHex('G')}${this.getHex('B')}${this.A ? this.getHex('A') : ''}`;
    }

    get Hsl(): HslColor | null {
      if (this.R && this.G && this.B) {
        const newRGB: _simpleColor = {
          R : this.R / 255,
          G : this.G / 255,
          B : this.B / 255
        }

        let cmin: number = Math.min(newRGB.R, newRGB.G, newRGB.B),
            cmax: number = Math.max(newRGB.R, newRGB.G, newRGB.B),
            delta: number = cmax - cmin,
            h = 0,
            s = 0,
            l = 0;
        // Calculate hue
        if (delta == 0) {
          h = 0;
        } else if (cmax === newRGB.R) {
          h = ((newRGB.G - newRGB.B) / delta) % 6;
        } else if (cmax === newRGB.G) {
          h = (newRGB.B - newRGB.R) / delta + 2;
        } else {
          h = (newRGB.R - newRGB.G) / delta + 4;
        }

        h = Math.round(h * 60);
        if (h < 0) {
          h += 360;
        }

        // Calculate lightness
        l = +(((cmax + cmin) / 2) * 100).toFixed(1);
        // Calculate saturation
        s = +((delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1))) * 100).toFixed(1);
        return { H: h, S: s, L:l};
      } else return null;
    }

    private get colorRGB(): _color {
      return this._colorRGB;
    }

    private set colorRGB(colorRGB: _color) {
      this._colorRGB = colorRGB;
    }

    constructor(R: number,G: number,B: number) {
        this.R = R;
        this.G = G;
        this.B = B;
    }

    public static fromColorRGB(color: _simpleColor) {
      let newColor = new Color(0,0,0);
      newColor.RGB = color;
      return newColor;
    }

    // @ts-ignore
    public static fromHex(hex: string): Color {
        if (Color.regHex.test(hex)) {
            return Color.fromColorRGB(Color.parseSets(hex.substring(1, hex.length)));
        } else {
            return  new Color(0,0,0);
        }
    }

    private static parseSet(sets: string, i: number, isSmall: boolean): number {
        let modifier = isSmall ? 1 : 2;
        let set = sets.substring(i * modifier, (i + 1) * modifier);
        return parseInt(isSmall ? set + set : set, 16);
    }

    private static parseSets(sets: string): _simpleColor {
        let isSmall = sets.length === 3;
        let haveAlpha = sets.length === 8;
        return {
            R: Color.parseSet(sets, 0,isSmall),
            G: Color.parseSet(sets, 1,isSmall),
            B: Color.parseSet(sets, 2,isSmall),
            A: haveAlpha ?  Color.parseSet(sets, 3,isSmall) / 255 * 100 : undefined
        }
    }

    private static getHex(color: Color, colorLetter: string): string {
      const tmpValue: number = color._colorRGB[colorLetter].value || 0;
      const value: number = colorLetter === 'A' ? tmpValue / 100 * 255 : tmpValue;
      const final: string = value.toString(16);
      return (final.length === 1 ? '0' : '') + final;
    }
    private getHex(colorLetter: string): string {
      return Color.getHex(this, colorLetter);
    }

    public static isDark(color: Color): boolean | undefined {
      // YIQ equation from http://24ways.org/2010/calculating-color-contrast
      let DR = 0.299, DG = 0.587, DB = 0.114;
      return color.R && color.G && color.B ? ((color.R * DR + color.G * DG + color.B * DB) < 128) : undefined
    }

    public static isLight(color: Color): boolean | undefined {
      return !Color.isDark(color);
    }

    public static negate(color: Color): Color {
      return color.each((c: number | undefined) => c ? 255 - c : undefined);
  	}

    public static darken (color: Color, amount: number): Color {
      return color;
      //return color.darken(amount).string()
    }

    public negate() {
      return Color.negate(this);
    }

    public isDark(): boolean | undefined {
      return Color.isDark(this);
    }
    public isLight(): boolean | undefined {
      return Color.isLight(this);
    }

    public each(cb: (c: number | undefined) => number | undefined): Color {
      this.R = cb(this.R);
      this.G = cb(this.G);
      this.B = cb(this.B);
      return this;
    }

    public toString() {
      return this.RGB;
    }

    // public [Symbol.iterator]() {
    //   let step = 0;
    //   const iterator = {
    //      next(): ColorItemIterator {
    //        step++;
    //        if (step === 0) {
    //          return { value: this.R.value, done: false };
    //        } else if (step === 1) {
    //          return { value: this.G.value, done: false };
    //        } else {
    //          return { value: this.B.value, done: true };
    //        }
    //      }
    //   }
    //   return iterator;
    // }
}
