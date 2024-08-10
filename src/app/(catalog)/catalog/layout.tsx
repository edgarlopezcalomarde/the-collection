import NavBar from './lib/components/navbar/navbar';
import CatalogAppSheelLayout from "./lib/layout/catalog-app-shell-layout"

export default function CatalogLayout({ children }: { children: React.ReactNode }) {
    return (
        <CatalogAppSheelLayout navbar={<NavBar />} >
            {children}
        </CatalogAppSheelLayout>
    )
}
