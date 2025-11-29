import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path : "/",
        children : [
            {
                index : true,
                lazy : {
                    Component : async () =>  {
                        const component = await import ("../pages/auth2/signup/SignUp.tsx")
                        return component.default
                    }
                }
            }
        ]
    },
    {
        path : "/movies", // Alamat dari sebuah page 
        children : [
            {
                index : true,
                lazy : {
                    Component : async () => {
                        const component = await import("../pages/movies/Movie.tsx")
                        return component .default
                    }
                }
            },
            {
                path : "add-movie",
                lazy : {
                    Component : async () => {
                        const component = await import("../pages/movies/AddMovie.tsx")
                        return component .default
                    }
                }
            }
        ]
    }
])

export default router