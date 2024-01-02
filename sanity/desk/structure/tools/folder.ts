import {
    Divider,
    ListItem,
    ListItemBuilder,
    StructureBuilder,
} from "sanity/desk";

export default function createFolder(
    S: StructureBuilder,
    title: string,
    listItems: (ListItemBuilder | ListItem | Divider)[]
) {
    return S.listItem()
        .title(title)
        .child(S.list().title(title).items(listItems));
}
