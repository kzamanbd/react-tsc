import { Conversation } from '@/types';

const getPartnerInfo = (conversation: Conversation, userId: string) => {
	if (conversation.toUser._id === userId) {
		return conversation.fromUser;
	} else {
		return conversation.toUser;
	}
};

export default getPartnerInfo;
