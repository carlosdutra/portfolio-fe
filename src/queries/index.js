import { gql } from "@apollo/client";

export const LOAD_PROJECTS = gql`
	query {
		projects {
			data {
				id
				attributes {
					ProjectName
					ProjectSlug
					ProjectURL
					ProjectDescription
					ProjectImages {
						data {
							id
						}
					}
				}
			}
		}
	}
`;

export const LOAD_MENU = gql`
	query {
		menuBar {
			data {
				attributes {
					Items {
						... on ComponentMenuItem {
							ItemLabel
							ItemURL
						}
					}
				}
			}
		}
	}
`;
