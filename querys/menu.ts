export const menuQuery = `
query menu {
  menu: menu {
    data {
      attributes {
        menuZone {
          __typename
          ... on ComponentMenuDropdown {
            label
            linkInternal {
              label
              page {
                data {
                  attributes {
                    title
                    slug
                  }
                }
              }
            }
            linkExternal {
              label
              url
            }
          }
          ... on ComponentMenuLinkInternal {
            label
            page {
              data {
                attributes {
                  title
                  slug
                }
              }
            }
          }
          ... on ComponentMenuLinkExternal {
            label
            url
          }
        }
      }
    }
  }
}`;
