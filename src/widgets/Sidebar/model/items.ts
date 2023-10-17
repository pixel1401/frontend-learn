export interface SidebarItemType {
    path : string,
    text: string,
    icon : React.VFC<React.SVGProps<SVGSVGElement>>
    isAuth?: boolean
}
