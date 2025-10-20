"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";

type Answer = {
  text: string;
  points: {
    foot?: number;
    full?: number;
    custom?: number;
    combo?: number;
    couples?: number;
  };
};

type Question = {
  id: number;
  question: string;
  answers: Answer[];
};

export default function MassageRecommender() {
  const { t } = useLanguage();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({
    foot: 0,
    full: 0,
    custom: 0,
    combo: 0,
    couples: 0,
  });
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);

  const questions: Question[] = [
    {
      id: 1,
      question: "What's your primary goal for the massage?",
      answers: [
        { text: "Relieve foot pain and fatigue", points: { foot: 3, combo: 2 } },
        { text: "Full body relaxation", points: { full: 3, combo: 2 } },
        { text: "Target specific pain areas", points: { custom: 3, full: 1 } },
        { text: "Share experience with partner", points: { couples: 3 } },
      ],
    },
    {
      id: 2,
      question: "How much time do you have?",
      answers: [
        { text: "30 minutes or less", points: { foot: 2, custom: 3 } },
        { text: "About an hour", points: { full: 2, foot: 1, combo: 2 } },
        { text: "90 minutes or more", points: { full: 3, combo: 3, couples: 2 } },
        { text: "Flexible, whatever works best", points: { full: 1, combo: 1 } },
      ],
    },
    {
      id: 3,
      question: "What's your experience with massage?",
      answers: [
        { text: "First timer, want to ease in", points: { foot: 3, full: 1 } },
        { text: "Regular massage client", points: { full: 3, custom: 2 } },
        { text: "Looking for deep therapeutic work", points: { custom: 3, full: 2 } },
        { text: "Want to try with someone", points: { couples: 3, full: 1 } },
      ],
    },
    {
      id: 4,
      question: "Where do you feel the most tension?",
      answers: [
        { text: "My feet and legs", points: { foot: 3, combo: 2 } },
        { text: "Neck, shoulders, and back", points: { custom: 2, full: 3 } },
        { text: "All over my body", points: { full: 3, combo: 2 } },
        { text: "Varies, depends on the day", points: { custom: 2, full: 1 } },
      ],
    },
    {
      id: 5,
      question: "What's your lifestyle like?",
      answers: [
        { text: "I'm on my feet all day", points: { foot: 3, combo: 2 } },
        { text: "Desk job with lots of sitting", points: { full: 2, custom: 2 } },
        { text: "Athletic and active", points: { custom: 3, full: 2 } },
        { text: "High stress environment", points: { full: 3, combo: 1 } },
      ],
    },
  ];

  const services = {
    foot: {
      name: "Foot Massage",
      icon: "🦶",
      description: "Perfect for relieving foot fatigue and promoting overall relaxation through reflexology",
      duration: "30 or 60 minutes",
      price: "$35-$55",
      benefits: ["Quick relief", "Reflexology benefits", "Great for busy schedules"],
      popular: false,
    },
    full: {
      name: "Full Body Massage",
      icon: "💆",
      description: "Complete relaxation with our signature Hawaiian-inspired techniques for total body wellness",
      duration: "60 or 90 minutes",
      price: "$70-$110",
      benefits: ["Total body relaxation", "Stress reduction", "Most popular choice"],
      popular: true,
    },
    custom: {
      name: "Custom Massage",
      icon: "✨",
      description: "Targeted therapeutic work focused on your specific problem areas and needs",
      duration: "30 minutes",
      price: "$45",
      benefits: ["Targeted relief", "Therapeutic focus", "Time efficient"],
      popular: false,
    },
    combo: {
      name: "Combination Massage",
      icon: "🌺",
      description: "Best of both worlds - foot massage combined with upper body work for comprehensive care",
      duration: "60 or 90 minutes",
      price: "$80-$120",
      benefits: ["Complete care", "Foot & body relief", "Great value"],
      popular: false,
    },
    couples: {
      name: "Couples Massage",
      icon: "💑",
      description: "Share the healing experience with your loved one in our private couples suite",
      duration: "60 or 90 minutes",
      price: "$140-$220",
      benefits: ["Shared experience", "Private suite", "Special occasions"],
      popular: true,
    },
  };

  const handleAnswer = (answerIndex: number) => {
    const answer = questions[currentQuestion].answers[answerIndex];
    const newScores = { ...scores };

    Object.entries(answer.points).forEach(([service, points]) => {
      newScores[service as keyof typeof scores] += points;
    });

    setScores(newScores);
    setAnswers([...answers, answerIndex]);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const getRecommendation = () => {
    const sorted = Object.entries(scores)
      .sort(([, a], [, b]) => b - a)
      .map(([service]) => service as keyof typeof services);

    return {
      primary: sorted[0],
      secondary: sorted[1],
    };
  };

  const reset = () => {
    setCurrentQuestion(0);
    setScores({ foot: 0, full: 0, custom: 0, combo: 0, couples: 0 });
    setShowResult(false);
    setAnswers([]);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showResult) {
    const recommendation = getRecommendation();
    const primaryService = services[recommendation.primary];
    const secondaryService = services[recommendation.secondary];

    return (
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Your Perfect Massage
              </h2>
              <p className="text-xl text-gray-600">
                Based on your answers, here's what we recommend
              </p>
            </div>

            {/* Primary Recommendation */}
            <div className="bg-gradient-to-br from-primary to-accent text-white rounded-2xl shadow-2xl p-8 md:p-12 mb-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-6xl">{primaryService.icon}</div>
                <div>
                  <div className="text-sm opacity-90 mb-1">Best Match For You</div>
                  <h3 className="text-3xl font-bold">{primaryService.name}</h3>
                  {primaryService.popular && (
                    <span className="inline-block mt-2 bg-white/20 px-3 py-1 rounded-full text-sm">
                      ⭐ Most Popular
                    </span>
                  )}
                </div>
              </div>

              <p className="text-xl mb-6 opacity-95">{primaryService.description}</p>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-sm opacity-90 mb-1">Duration</div>
                  <div className="font-bold">{primaryService.duration}</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-sm opacity-90 mb-1">Price</div>
                  <div className="font-bold">{primaryService.price}</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-sm opacity-90 mb-1">Match Score</div>
                  <div className="font-bold">{scores[recommendation.primary]} points</div>
                </div>
              </div>

              <div className="mb-6">
                <div className="text-sm opacity-90 mb-2">Key Benefits:</div>
                <div className="flex flex-wrap gap-2">
                  {primaryService.benefits.map((benefit, idx) => (
                    <span key={idx} className="bg-white/20 px-3 py-1 rounded-full text-sm">
                      ✓ {benefit}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href="tel:8089121000"
                className="block w-full bg-white text-primary hover:bg-gray-100 font-bold text-lg py-4 px-6 rounded-full transition-colors text-center"
              >
                📞 Book This Massage Now
              </a>
            </div>

            {/* Secondary Recommendation */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-4xl">{secondaryService.icon}</div>
                  <div>
                    <div className="text-sm text-gray-600">Also Great For You</div>
                    <h4 className="text-xl font-bold text-primary">{secondaryService.name}</h4>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600">Match Score</div>
                  <div className="text-2xl font-bold text-primary">{scores[recommendation.secondary]}</div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">{secondaryService.description}</p>
              <div className="text-sm text-gray-600">
                <span className="font-semibold">{secondaryService.duration}</span> •
                <span className="font-semibold ml-2">{secondaryService.price}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={reset}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-4 px-6 rounded-full transition-colors"
              >
                ↻ Retake Quiz
              </button>
              <a
                href="/services"
                className="flex-1 bg-accent hover:bg-accent-dark text-white font-semibold py-4 px-6 rounded-full transition-colors text-center"
              >
                View All Services
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Which Massage Is Right for You?
            </h2>
            <p className="text-xl text-gray-600">
              Answer a few quick questions to find your perfect massage
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Question {currentQuestion + 1} of {questions.length}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-primary to-accent h-3 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Question Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
              {questions[currentQuestion].question}
            </h3>

            <div className="space-y-4">
              {questions[currentQuestion].answers.map((answer, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className="w-full p-6 text-left bg-gray-50 hover:bg-primary hover:text-white rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg border-2 border-transparent hover:border-primary"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary/10 hover:bg-white/20 rounded-full flex items-center justify-center font-bold">
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span className="text-lg">{answer.text}</span>
                  </div>
                </button>
              ))}
            </div>

            {currentQuestion > 0 && (
              <button
                onClick={() => {
                  setCurrentQuestion(currentQuestion - 1);
                  const lastAnswer = answers[answers.length - 1];
                  const lastQuestion = questions[currentQuestion - 1];
                  const lastAnswerPoints = lastQuestion.answers[lastAnswer].points;

                  const newScores = { ...scores };
                  Object.entries(lastAnswerPoints).forEach(([service, points]) => {
                    newScores[service as keyof typeof scores] -= points;
                  });
                  setScores(newScores);
                  setAnswers(answers.slice(0, -1));
                }}
                className="mt-6 text-gray-600 hover:text-primary transition-colors"
              >
                ← Back
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
