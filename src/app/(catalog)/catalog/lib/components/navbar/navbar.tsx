import Search from "../search/search";
import ShoppingBagButton from "../shopping-bag/shopping-bag-button";
import ButtonLogOut from "../button/button-log-out";
import ButtonLogIn from "../button/button-log-in";
import { getUser } from "@/lib/api/get-user";

export default async function NavBar() {
    const user = await getUser();

    return (
        <div className="flex w-full justify-center items-center h-full gap-4 max-w-[900px] mx-auto px-4 lg:px-0">
            <Search />

            {user ? (
                <div className="flex gap-5 h-full items-center">
                    <ShoppingBagButton />
                    <ButtonLogOut />
                </div>
            ) : (
                <ButtonLogIn />
            )}
        </div>
    );
}
