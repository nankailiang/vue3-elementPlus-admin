export default [
    {
        url: "/login",
        method: "post",
        response: () => {
            return {
                code: 200,
                message: "login success!",
                data: []
            }
        }
    }
]