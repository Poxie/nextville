"use client";
import { MdAlternateEmail, MdPerson } from "react-icons/md";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";

const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export default function ContactForm() {
    const [info, setInfo] = useState({
        name: '',
        email: '',
        message: '',
    })
    const [feedback, setFeedback] = useState<null | {
        message: string;
        type: 'danger' | 'success';
    }>(null);
    const [loading, setLoading] = useState(false);

    const updateInfo = (key: keyof typeof info, value: string) => {
        setInfo({
            ...info,
            [key]: value,
        });
        setFeedback(null);
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if(!info.name || !info.email || !info.message) {
            setFeedback({
                message: 'Please fill out all fields.',
                type: 'danger',
            })
            return;
        }
        if(info.email.match(mailRegex) === null) {
            setFeedback({
                message: 'Please enter a valid email address.',
                type: 'danger',
            })
            return;
        }
        

        setLoading(true);
        const response = await fetch(`/email`, {
            method: 'POST',
            body: JSON.stringify(info),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await response.json();
        setLoading(false);

        if(!response.ok) {
            return setFeedback({
                message: data.message,
                type: 'danger',
            })
        }

        setFeedback({
            message: data.message,
            type: 'success',
        })
        setInfo({
            name: '',
            email: '',
            message: '',
        })
    }

    return(
        <form 
            className="w-[750px] max-w-full mx-auto p-5 flex flex-col gap-2 bg-secondary rounded-md"
            onSubmit={handleSubmit}
        >
            {feedback && (
                <span className={twMerge(
                    "p-3 border-[1px] rounded",
                    feedback.type === 'danger' && 'border-c-primary bg-c-primary/30',
                    feedback.type === 'success' && 'border-success bg-success/20',
                )}>
                    {feedback.message}
                </span>
            )}
            <div className="flex flex-col md:flex-row gap-2">
                <Input 
                    icon={<MdPerson size={20} className="text-secondary" />}
                    onChange={text => updateInfo('name', text)}
                    placeholder="Full name"
                    value={info.name}
                />
                <Input 
                    icon={<MdAlternateEmail size={20} className="text-secondary" />}
                    onChange={text => updateInfo('email', text)}
                    placeholder="Email address"
                    value={info.email}
                />
            </div>
            <Input 
                onChange={text => updateInfo('message', text)}
                placeholder="Message"
                value={info.message}
                textArea
            />
            <Button 
                className="self-end"
                disabled={loading}
                type="primary"
            >
                {loading ? 'Creating connection...' : 'Create connection'}
            </Button>
        </form>
    )
}