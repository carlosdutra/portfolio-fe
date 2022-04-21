import { gql } from "@apollo/client";

export const LOAD_PROJECTS = gql`
	query {
		projects(sort: "ProjectListOrder", pagination: { start: 0, limit: 100 }) {
			data {
				attributes {
					ProjectName
					ProjectSlug
					ProjectFullCapture {
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
					ProjectBrief
					ProjectFullCapture {
						data {
							attributes {
								url
							}
						}
					}
					ProjectPartnerUrl
					ProjectPartnerLogo {
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

export const LOAD_ABOUT = gql`
	query {
		about {
			data {
				attributes {
					Hero {
						Heading
						SubHeading
					}
					Techonologies(pagination: { start: 0, limit: 100 }) {
						Name
					}
				}
			}
		}
	}
`;
