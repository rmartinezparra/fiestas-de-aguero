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
