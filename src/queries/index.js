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
					ProjectFullCapture {
						data {
							attributes {
								url
							}
						}
					}
					ProjectImages {
						data {
							attributes {
								url
							}
						}
					}
				}
			}
		}
	}
`;

export const LOAD_PROJECT = gql`
	query Projects($slug: String!) {
		projects(filters: { ProjectSlug: { eq: $slug } }) {
			data {
				attributes {
					ProjectName
					ProjectURL
					ProjectDescription
					ProjectFullCapture {
						data {
							attributes {
								url
							}
						}
					}
					ProjectImages {
						data {
							attributes {
								url
							}
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
							Router
							OpenInNewTab
						}
					}
				}
			}
		}
	}
`;
