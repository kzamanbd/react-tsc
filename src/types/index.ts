export interface ChildrenProps {
	children: React.ReactNode;
}

export interface User {
	_id: string;
	name: string;
	email: string;
	createdAt: string;
	updatedAt: string;
}

export interface Message {
	_id: string;
	message: string;
	createdAt: string;
	updatedAt: string;
	conversationId: Conversation;
	userInfo: User;
}

export interface Conversation {
	_id: string;
	fromUser: User;
	toUser: User;
	createdAt: string;
	updatedAt: string;
	lastMessage: Message;
	partnerInfo: User;
}
