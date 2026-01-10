import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { ChatContext } from "../context/chatContext";
import { getallchats } from "../Service/chats";
import { tokencontext } from "../context/Tokencontext";
import { currentUserContext } from "../context/CurrentUserContext";
import { getmessages, sendmessage } from "../Service/message";

export default function AllChatsPage() {
  const { Chat, SetChat } = useContext(ChatContext);
  const { User } = useContext(currentUserContext);
  const { token } = useContext(tokencontext);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedChat, setSelectedChat] = useState(null);
  const [messageInput, setMessageInput] = useState("");
  const [allmessage, setallMessage] = useState([]);
  const [chat_Id, setChat_Id] = useState(null);

  const currentUserId = User?._id;

  const handleChatClick = async (chat, index) => {
    setSelectedChat(chat);
    const chatId = Chat[index].id;
    setChat_Id(chatId)
    const res = await getmessages(token, chatId);

    const formattedMessages = res.data.messages.map((msg, index) => ({
      id: index + 1,
      sender: msg.senderId._id === currentUserId ? "me" : "them",
      text: msg.text,
      time: new Date(msg.createdAt).toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    }));
    setallMessage(formattedMessages);
  };
  // console.log(allmessage);

  /* ================= FETCH CHATS ================= */
  useEffect(() => {
    const fetchChats = async () => {
      try {
        const res = await getallchats(token);

        const formattedChats = res.data.map((chat) => {
          const otherMember = chat.members.find((m) => m._id !== currentUserId);

          return {
            id: chat._id,
            name: otherMember?.name || "Unknown",
            avatar: "from-pink-400 to-purple-500",
            online: otherMember?.status === "online",
            lastMessage: chat.lastMessageID?.text || "",
            time: new Date(
              chat.lastMessageID?.createdAt || chat.updatedAt
            ).toLocaleTimeString("en-IN", {
              hour: "2-digit",
              minute: "2-digit",
            }),
            unread: 0,
          };
        });

        SetChat(formattedChats);
      } catch (err) {
        console.error("Failed to fetch chats", err);
      }
    };

    fetchChats();
  }, [token, SetChat, currentUserId]);

  /* ================= FILTER ================= */
  const filteredChats = Chat.filter((chat) =>
    chat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  /* ================= SEND MESSAGE (TEMP) ================= */
  const handleSendMessage = () => {
    if (!messageInput.trim()) return;
    sendmessage(token, chat_Id, messageInput, "text");
    setMessageInput("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 pt-14">
      <Navbar />

      <div className="h-[calc(100vh-3.5rem)] flex">
        {/* ================= SIDEBAR ================= */}
        <div
          className={`${
            selectedChat ? "hidden md:flex" : "flex"
          } w-full md:w-80 lg:w-96 bg-white/10 backdrop-blur-xl border-r border-white/20 flex-col`}
        >
          {/* Search */}
          <div className="p-4 border-b border-white/20">
            <input
              type="text"
              placeholder="Search chats..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/10 text-white px-4 py-3 rounded-xl outline-none"
            />
          </div>

          {/* Chat List */}
          <div className="flex-1 overflow-y-auto">
            {filteredChats.map((chat, index) => (
              <div
                key={chat.id}
                onClick={() => {
                  handleChatClick(chat, index);
                }}
                className={`p-4 cursor-pointer border-b border-white/10 hover:bg-white/10`}
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${chat.avatar}`}
                    ></div>
                    {chat.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full"></div>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <h3 className="text-white font-semibold truncate">
                        {chat.name}
                      </h3>
                      <span className="text-white/60 text-xs">{chat.time}</span>
                    </div>
                    <p className="text-white/70 text-sm truncate">
                      {chat.lastMessage}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= MAIN CHAT ================= */}
        <div
          className={`${
            selectedChat ? "flex" : "hidden md:flex"
          } flex-1 flex-col bg-white/5`}
        >
          {selectedChat ? (
            <>
              {/* Header */}
              <div className="p-4 bg-white/10 border-b border-white/20 flex items-center gap-3">
                <button
                  className="md:hidden text-white"
                  onClick={() => {
                    setSelectedChat(null);
                  }}
                >
                  ←
                </button>

                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${selectedChat.avatar}`}
                ></div>

                <div>
                  <h2 className="text-white font-semibold">
                    {selectedChat.name}
                  </h2>
                  <p className="text-white/60 text-sm">
                    {selectedChat.online ? "Online" : "Offline"}
                  </p>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {allmessage.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.sender === "me" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md ${
                        message.sender === "me"
                          ? "bg-gradient-to-br from-blue-500 to-purple-600"
                          : "bg-white/20 backdrop-blur-sm"
                      } rounded-2xl ${
                        message.sender === "me"
                          ? "rounded-br-sm"
                          : "rounded-bl-sm"
                      } px-4 py-2`}
                    >
                      <p className="text-white">{message.text}</p>
                      <span className="text-white/60 text-xs mt-1 block">
                        {message.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="p-4 bg-white/10 border-t border-white/20 flex gap-2">
                <input
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Type a message..."
                  className="flex-1 bg-white/10 text-white px-4 py-3 rounded-xl outline-none"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-blue-500 px-6 py-3 rounded-xl text-white"
                >
                  Send
                </button>
              </div>
            </>
          ) : (
            <div className="hidden md:flex flex-1 items-center justify-center text-white/60">
              Select a chat to start messaging
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
