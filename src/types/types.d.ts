export interface ContentDayType {
	day: number;
	dayWeek: string;
	date: string;
	typeDay?: string;
	events: contentEventType[];
}

export interface ContentEventType {
	time: string;
	description: string;
}

export interface NavContextType {
	yearNav: number | null;
	setYearNav: (year: number) => void;
	dayNav: number | null;
	setDayNav: (day: number) => void;
}
