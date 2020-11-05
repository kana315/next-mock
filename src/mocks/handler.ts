import type { GetFormQuery, SignInUserMutation } from "api/graphql";
import { graphql } from "msw";

export const handlers = [
  graphql.query<GetFormQuery>("getForm", (_, res, ctx) => {
    const formData = {
      applicantCount: 1,
      getPlanList: [],
      lastStock: { currentCount: 9, limit: 9 },
    };
    return res(ctx.data(formData));
  }),
  graphql.mutation("signInUser", (req, res, ctx) => {
    const { email, password } = req.variables;

    if (!(email && password)) {
      return res(
        ctx.errors([
          {
            message: "User not found",
          },
        ])
      );
    }

    const data: SignInUserMutation = {
      signInUser: {
        errors: [],
        user: {
          token: "mockmockmock",
        },
      },
    };
    return res(ctx.data(data));
  }),
];
