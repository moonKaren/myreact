import { Route, Routes } from "react-router";
import { HomePage } from "../pages/HomePage/HomePage"
import { CatalogPage } from "../pages/CatalogPage/CatalogPage"
import { ItemPage } from "../pages/ItemPage/ItemPage"
import { Page404 } from "../pages/Page404/Page404"


export const PATH = {
    Home: '/',
    Catalog: '/catalog',
    Item: '/item/:id',
    Page404: '*'
}

export function Routing() {
    return (
        <Routes>
            <Route path={PATH.Home} element={<HomePage />} />
            <Route path={PATH.Catalog} element={<CatalogPage />} />
            <Route path={PATH.Item} element={<ItemPage />} />
            <Route path={PATH.Page404} element={<Page404 />} />
        </Routes>
    )
}