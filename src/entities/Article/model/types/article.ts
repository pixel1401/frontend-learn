export enum ArticleBlockType {
    TEXT = 'TEXT',
    CODE = 'CODE',
    IMAGE = 'IMAGE',
}

export interface ArticleBlockBase {
    id: string,
    type: ArticleBlockType
}

export interface ArticleCodeBlock extends ArticleBlockBase {
    type : ArticleBlockType.CODE
    code: string
}

export interface ArticleTextBlock extends ArticleBlockBase {
    type : ArticleBlockType.TEXT,
    paragraphs: Array<string>
}

export interface ArticleImageBlock extends ArticleBlockBase {
    type : ArticleBlockType.IMAGE,
    src: string,
    title: string
}

export enum ArticleType {
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMIC = 'ECONOMIC'
}

export type ArticleBlock = ArticleCodeBlock | ArticleTextBlock | ArticleImageBlock;

// ! MAIN INTERFACE
export interface Article {
    id: string,
    title: string,
    subtitle: string,
    img: string,
    views: number,
    createdAt: string,
    type: ArticleType[],
    blocks : ArticleBlock[]
}
