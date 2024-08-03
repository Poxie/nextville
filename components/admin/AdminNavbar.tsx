import AdminSaveButton from "./AdminSaveButton";

export default function AdminNavbar() {
    return(
        <div className="fixed top-0 left-0 w-full py-4 border-b-[1px] border-b-tertiary bg-primary">
            <div className="main-width flex justify-between items-center">
                <div className="flex items-end gap-2">
                    <span className="text-2xl font-semibold">
                        Nextville
                    </span> 
                    <span className="text-lg text-secondary">
                        admin
                    </span>
                </div>
                <AdminSaveButton />
            </div>
        </div>
    )
}