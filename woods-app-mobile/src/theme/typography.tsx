import { css } from 'styled-components';

const TYPOGRAPHY_SIZE_CSS = {
  headline: css`
    font-size: 36px;
    line-height: 40px;
  `,
  subheading1: css`
    font-size: 28px;
    line-height: 32px;
  `,
  subheading2: css`
    font-size: 24px;
    line-height: 30px;
  `,
  paragraph: css`
    font-size: 12px;
    line-height: 17px;
  `,
  caption1: css`
    font-size: 16px;
    line-height: 24px;
  `,
  caption2: css`
    font-size: 14px;
    line-height: 24px;
  `,
  footer1: css`
    font-size: 12px;
    line-height: 15px;
  `,
  footer2: css`
    font-size: 10px;
    line-height: 12px;
  `,
  footnote: css`
    font-size: 9px;
    line-height: 11px;
  `,
};

export const TYPOGRAPHY_CSS = {
  headline: {
    light: css`
      ${TYPOGRAPHY_SIZE_CSS.headline};
      font-weight: 400;
    `,
    main: css`
      ${TYPOGRAPHY_SIZE_CSS.headline};
      font-weight: 600;
    `,
    bold: css`
      ${TYPOGRAPHY_SIZE_CSS.headline};
      font-weight: 700;
    `,
  },
  subheading1: {
    light: css`
      ${TYPOGRAPHY_SIZE_CSS.subheading1};
      font-weight: 400;
    `,
    main: css`
      ${TYPOGRAPHY_SIZE_CSS.subheading1};
      font-weight: 600;
    `,
    bold: css`
      ${TYPOGRAPHY_SIZE_CSS.subheading1};
      font-weight: 700;
    `,
  },
  subheading2: {
    light: css`
      ${TYPOGRAPHY_SIZE_CSS.subheading2};
      font-weight: 400;
    `,
    main: css`
      ${TYPOGRAPHY_SIZE_CSS.subheading2};
      font-weight: 600;
    `,
    bold: css`
      ${TYPOGRAPHY_SIZE_CSS.subheading2};
      font-weight: 700;
    `,
  },
  paragraph: {
    light: css`
      ${TYPOGRAPHY_SIZE_CSS.paragraph};
      font-weight: 400;
    `,
    main: css`
      ${TYPOGRAPHY_SIZE_CSS.paragraph};
      font-weight: 600;
    `,
    bold: css`
      ${TYPOGRAPHY_SIZE_CSS.paragraph};
      font-weight: 700;
    `,
  },
  caption1: {
    light: css`
      ${TYPOGRAPHY_SIZE_CSS.caption1};
      font-weight: 400;
    `,
    main: css`
      ${TYPOGRAPHY_SIZE_CSS.caption1};
      font-weight: 600;
    `,
    bold: css`
      ${TYPOGRAPHY_SIZE_CSS.caption1};
      font-weight: 700;
    `,
  },
  caption2: {
    light: css`
      ${TYPOGRAPHY_SIZE_CSS.caption2};
      font-weight: 400;
    `,
    main: css`
      ${TYPOGRAPHY_SIZE_CSS.caption2};
      font-weight: 600;
    `,
    bold: css`
      ${TYPOGRAPHY_SIZE_CSS.caption2};
      font-weight: 700;
    `,
  },
  footer1: {
    light: css`
      ${TYPOGRAPHY_SIZE_CSS.footer1};
      font-weight: 400;
    `,
    main: css`
      ${TYPOGRAPHY_SIZE_CSS.footer1};
      font-weight: 600;
    `,
    bold: css`
      ${TYPOGRAPHY_SIZE_CSS.footer1};
      font-weight: 700;
    `,
  },
  footer2: {
    light: css`
      ${TYPOGRAPHY_SIZE_CSS.footer2};
      font-weight: 400;
    `,
    main: css`
      ${TYPOGRAPHY_SIZE_CSS.footer2};
      font-weight: 600;
    `,
    bold: css`
      ${TYPOGRAPHY_SIZE_CSS.footer2};
      font-weight: 700;
    `,
  },
  footnote: {
    light: css`
      ${TYPOGRAPHY_SIZE_CSS.footnote};
      font-weight: 400;
    `,
    main: css`
      ${TYPOGRAPHY_SIZE_CSS.footnote};
      font-weight: 600;
    `,
    bold: css`
      ${TYPOGRAPHY_SIZE_CSS.footnote};
      font-weight: 700;
    `,
  },
};

const TYPOGRAPHY_SIZES = {
  headline: { fontSize: 36, lineHeight: 21 },
  subheading1: { fontSize: 28, lineHeight: 22 },
  subheading2: {
    fontSize: 24,
    lineHeight: 24,
  },
  paragraph: {
    fontSize: 19,
    lineHeight: 24,
  },
  caption1: {
    fontSize: 16,
    lineHeight: 24,
  },
  caption2: {
    fontSize: 14,
    lineHeight: 24,
  },
};

export const TYPOGRAPHY = {
  headline: {
    light: { ...TYPOGRAPHY_SIZES.headline, fontWeight: '400' },
    main: { ...TYPOGRAPHY_SIZES.headline, fontWeight: '600' },
    bold: { ...TYPOGRAPHY_SIZES.headline, fontWeight: '700' },
  },
  subheading1: {
    light: { ...TYPOGRAPHY_SIZES.subheading1, fontWeight: '400' },
    main: { ...TYPOGRAPHY_SIZES.subheading1, fontWeight: '600' },
    bold: { ...TYPOGRAPHY_SIZES.subheading1, fontWeight: '700' },
  },
  subheading2: {
    light: { ...TYPOGRAPHY_SIZES.subheading2, fontWeight: '400' },
    main: { ...TYPOGRAPHY_SIZES.subheading2, fontWeight: '600' },
    bold: { ...TYPOGRAPHY_SIZES.subheading2, fontWeight: '700' },
  },
  paragraph: {
    light: { ...TYPOGRAPHY_SIZES.paragraph, fontWeight: '400' },
    main: { ...TYPOGRAPHY_SIZES.paragraph, fontWeight: '600' },
    bold: { ...TYPOGRAPHY_SIZES.paragraph, fontWeight: '700' },
  },
  caption1: {
    light: { ...TYPOGRAPHY_SIZES.caption1, fontWeight: '400' },
    main: { ...TYPOGRAPHY_SIZES.caption1, fontWeight: '600' },
    bold: { ...TYPOGRAPHY_SIZES.caption1, fontWeight: '700' },
  },
  caption2: {
    light: { ...TYPOGRAPHY_SIZES.caption2, fontWeight: '400' },
    main: { ...TYPOGRAPHY_SIZES.caption2, fontWeight: '600' },
    bold: { ...TYPOGRAPHY_SIZES.caption2, fontWeight: '700' },
  },
};

export type TypographyTypes =
  | 'headline.light'
  | 'headline.main'
  | 'headline.bold'
  | 'subheading1.light'
  | 'subheading1.main'
  | 'subheading1.bold'
  | 'subheading2.light'
  | 'subheading2.main'
  | 'subheading2.bold'
  | 'paragraph.light'
  | 'paragraph.main'
  | 'paragraph.bold'
  | 'caption1.light'
  | 'caption1.main'
  | 'caption1.bold'
  | 'caption2.light'
  | 'caption2.main'
  | 'caption2.bold'
  | 'footer1.light'
  | 'footer1.main'
  | 'footer1.bold'
  | 'footer2.light'
  | 'footer2.main'
  | 'footer2.bold'
  | 'footnote.light'
  | 'footnote.main'
  | 'footnote.bold';
